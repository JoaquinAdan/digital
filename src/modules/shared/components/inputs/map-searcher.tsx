import DigitalInput from '@/modules/shared/components/inputs/digital-input'
import InputLayout from '@/modules/shared/components/inputs/input-layout'
import MapSelector from '@/modules/shared/components/inputs/map-selector'
import { FormLabel } from '@/modules/shared/components/ui/form'
import LoadingButton from '@/modules/shared/components/ui/loading-button'
import { Skeleton } from '@/modules/shared/components/ui/skeleton'
import { useCoords } from '@/modules/shared/hooks/use-coords'
import { useNeighborhood } from '@/modules/shared/hooks/use-neighborhood'
import { NominatimForm } from '@/modules/shared/models/nominatim-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef, useState } from 'react'
import { FieldValues, Path, PathValue, useForm, UseFormReturn } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>
  title: string
}

const formSchema = z.object({
  street: z.string().min(1, 'Debes escribir una calle'),
  city: z.string().min(1, 'Debes escribir una ciudad'),
})

const MapSearcher = <T extends FieldValues>({ form, title }: Props<T>) => {
  const [isCoordsChanged, setIsCoordsChanged] = useState(false)

  const nominatimForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { street: '', city: 'Campana' },
  })
  const prevCoordsRef = useRef({
    latitude: form.watch('coordinates.latitude' as Path<T>),
    longitude: form.watch('coordinates.longitude' as Path<T>),
  })

  const mutation = useCoords((data) => {
    if (data.length > 0) {
      form.setValue(
        'coordinates' as Path<T>,
        {
          latitude: Number(data[0]?.lat),
          longitude: Number(data[0]?.lon),
        } as PathValue<T, Path<T>>
      )
    } else toast.error('No se encontró la ubicación')
    setIsCoordsChanged(false)
  })

  const onSubmit = (values: NominatimForm) => mutation.mutate({ street: values.street, city: values.city })

  useEffect(() => {
    const currentCoords = {
      latitude: form.watch('coordinates.latitude' as Path<T>),
      longitude: form.watch('coordinates.longitude' as Path<T>),
    }

    if (
      currentCoords.latitude !== prevCoordsRef.current.latitude ||
      currentCoords.longitude !== prevCoordsRef.current.longitude
    ) {
      setIsCoordsChanged(true)
      prevCoordsRef.current = currentCoords
    } else {
      setIsCoordsChanged(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch('coordinates.latitude' as Path<T>), form.watch('coordinates.longitude' as Path<T>)])

  const data = useNeighborhood(
    form.watch('coordinates.latitude' as Path<T>),
    form.watch('coordinates.longitude' as Path<T>),
    isCoordsChanged
  )

  useEffect(() => {
    if (data.isRefetching) {
      setIsCoordsChanged(false)
    }
  }, [data.isRefetching])

  return (
    <div>
      <FormLabel>Ubicación del {title}:</FormLabel>
      <div className='grid grid-cols-2 md:flex md:items-end gap-2 mb-2'>
        <DigitalInput name='street' placeholder='Nombre de la calle' label='Calle' form={nominatimForm} />
        <DigitalInput name='city' placeholder='Nombre de la ciudad' label='Ciudad' form={nominatimForm} />
        <LoadingButton
          onClick={nominatimForm.handleSubmit(onSubmit)}
          isLoading={mutation.isPending}
          className='col-span-2'
          variant='outline'
          type='button'
        >
          Buscar
        </LoadingButton>
      </div>
      <p className='text-gray-400 text-xs mb-2'>Utiliza estos inputs para geolocalizar la ubicación del {title}</p>

      <InputLayout name={'coordinates' as Path<T>} form={form} styles='col-span-2'>
        <>
          {data.isRefetching ? (
            <Skeleton className='h-[400px] w-full rounded-xl bg-gray-300' />
          ) : (
            <MapSelector
              key={mutation.data?.[0]?.place_id ?? 'default-key'}
              value={[form.watch('coordinates.latitude' as Path<T>), form.watch('coordinates.longitude' as Path<T>)]}
              setValue={form.setValue}
            />
          )}
          <div
            className='w-full border-l-[1px] border-b-[1px] border-r-[1px] rounded-b-md p-1 md:p-2 text-left'
            style={{ marginTop: '-2px' }}
          >
            <p className='font-medium'>
              Coordenada:
              <span className='font-normal'>
                {form.watch('coordinates.latitude' as Path<T>)?.toFixed(5)},
                {form.watch('coordinates.longitude' as Path<T>)?.toFixed(5)}
              </span>
            </p>
            <p className='font-medium'>
              Barrio:{' '}
              <span className='font-normal'>
                {data?.data?.features?.[0]?.properties?.address?.neighbourhood ||
                  mutation?.data?.[0]?.display_name.split(',')[1] ||
                  'No encontrado'}
              </span>
            </p>
          </div>
        </>
      </InputLayout>
    </div>
  )
}

export default MapSearcher

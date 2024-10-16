// export type ClaimFormDto = Pick<Claim, 'ciudadanoId' | 'observaciones' | 'tipoIncidente' | 'origen' | 'areaServicio' | 'coordinates'>

export interface UserFormDto {
  name: string
  email: string
  password: string
  roles: string[]
}

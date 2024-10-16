import { Claim } from '../models/claim'
import { ClaimViewModel } from '../models/claims-view-model'

const toClaimViewModel = (data?: Claim[]): ClaimViewModel[] => {
  if (!data) return []
  const claims = data?.map(claim => ({
    'area de servicio': claim.areaServicio.descripcion,
    'tipo de incidente': claim.tipoIncidente.descripcion,
    prioridad: claim.prioridad.descripcion,
    origen: claim.origen.descripcion,
    'otros datos': claim.otrosDatos,
    'fecha de creación': claim.fechaAlta,
    vecino: claim.ciudadanoId,
    estado: claim.estadoId,
    adminId: claim.adminId,
    observaciones: claim.observaciones,
    numero: claim.numero,
    uuid: claim.uuid,
    coordinates: claim.coordinates,
  }))
  return claims
}

export default toClaimViewModel

import { useQuery } from '@tanstack/react-query'
import CatalogResponse from '../../shared/dto/catalog-response.dto'
import { getRolesHttp } from '../services/get-roles'

export const GET_ROLES_CATALOG = 'GET_ROLES_CATALOG'

export const useRolesCatalog = () => {
  const rolesCatalog = useQuery<CatalogResponse>({
    queryKey: [GET_ROLES_CATALOG],
    queryFn: getRolesHttp,
  })

  return rolesCatalog
}

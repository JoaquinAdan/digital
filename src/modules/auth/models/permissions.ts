export interface Permissions {
  id: number
  rolId: number
  scope: string | '*'
  resource: string | '*'
  action: string | '*'
}

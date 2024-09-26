/*
 * Los PATHS estan divididos en los 4 posibles roles generales de la aplicación, revisar en README.md
 */

const PATHS = {
  PUBLICS: {
    ELECTRONIC_ADDRESS: '/domicilio-electronico',
    CONTACTS: '/contacts',
    AUTH: '/auth',
    LOGIN: '/login',
    LOGOUT: '/logout',
    EXAMPLE: '/ejemplo',
    HOME: '/',
  },
  NEIGHBOR: {},
  ADMIN: { CLAIMS: '/reclamos', CLAIMS_DETAIL: '/reclamos/detail' },
  DIGITAL: { USERS: '/usuarios' },
}

export default PATHS

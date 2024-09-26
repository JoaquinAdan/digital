/*
 * Los PATHS estan divididos en los 4 posibles roles generales de la aplicación, revisar en README.md
 * Tambien estan los GENERICS que son rutas que se repiten en varios roles
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
  ADMIN: { CLAIMS: '/reclamos' },
  DIGITAL: { USERS: '/usuarios' },
  GENERICS: {
    COMPLETED: '/completado',
    AUTHENTICATION: '/autenticacion',
    DETAIL: '/detalle',
  },
}

export default PATHS

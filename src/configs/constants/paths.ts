/*
 * Los PATHS estan divididos en los 4 posibles roles generales de la aplicación, revisar en README.md
 * Tambien estan los GENERICS que son rutas que se repiten en varios roles
 */

const PATHS = {
  PUBLIC: {
    ELECTRONIC_ADDRESS: '/domicilio-electronico',
    CONTACTS: '/contacts',
    AUTH: '/auth',
    LOGIN: '/login',
    LOGOUT: '/logout',
    EXAMPLE: '/ejemplo',
    HOME: '/',
  },
  NEIGHBOR: {},
  ADMIN: {
    CLAIMS: '/reclamos',
    SOCIAL: '/social',
  },
  DIGITAL: {
    USERS: '/usuarios',
  },
  GENERIC: {
    COMPLETED: '/completado',
    AUTHENTICATION: '/autenticacion',
    DETAIL: '/detalle',
    SURVEY: '/encuesta',
  },
}

export default PATHS

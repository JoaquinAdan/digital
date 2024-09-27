/*
 * Este archivo contiene las constantes de visibilidad de las
 * rutas de la aplicación.
 * con respecto a los roles disponibles en la aplicación.
 */

export const VISIBILITY = {
  PUBLIC: 'PUBLIC' as const, // --> Para todos los visitantes
  NEIGHBOR: 'NEIGHBOR' as const, // ---> Vecinos con cuenta
  ADMIN: 'ADMIN' as const, // ----> Administrativos de la municipalidad
  DIGITAL: 'DIGITAL' as const, // ----> Mantenedores de Campana digital
}

export const visibilityText = {
  [VISIBILITY.PUBLIC]: 'Publico',
  [VISIBILITY.NEIGHBOR]: 'Usuario',
  [VISIBILITY.ADMIN]: 'Administrador',
  [VISIBILITY.DIGITAL]: 'Digital',
}

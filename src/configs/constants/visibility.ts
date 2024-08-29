export const VISIBILITY = {
  PUBLIC: 'PUBLIC' as const,        // --> Para todos los visitantes
  PROTECTED: 'PROTECTED' as const, // ---> Vecinos con cuenta
  PRIVATE: 'PRIVATE' as const,    // ----> Administrativos de la municipalidad
  DIGITAL: 'DIGITAL' as const,   // ----> Mantenedores de Campana digital
}

export const visibilityText = {
  [VISIBILITY.PUBLIC]: 'Publico',
  [VISIBILITY.PROTECTED]: 'Usuario',
  [VISIBILITY.PRIVATE]: 'Administrador',
  [VISIBILITY.DIGITAL]: 'Digital',
}
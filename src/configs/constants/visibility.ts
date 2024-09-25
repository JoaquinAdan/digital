export const VISIBILITY = {
  PUBLIC: 'PUBLIC' as const,        // --> Para todos los visitantes
  PROTECTED: 'PROTECTED' as const, // ---> Vecinos con cuenta
  VISITOR: 'VISITOR' as const, // ---> Visitador Social
  PRIVATE: 'PRIVATE' as const,    // ----> Administrativos de la municipalidad
  DIGITAL: 'DIGITAL' as const,   // ----> Mantenedores de Campana digital
}

export const visibilityText = {
  [VISIBILITY.PUBLIC]: 'Publico',
  [VISIBILITY.PROTECTED]: 'Usuario',
  [VISIBILITY.VISITOR]: 'Visitador Social',
  [VISIBILITY.PRIVATE]: 'Administrador',
  [VISIBILITY.DIGITAL]: 'Digital',
}

export const rolesMock = [
  {
    name: 'Admin',
    permissions: [{ scope: '*', resource: '*', action: '*' }],
  },
  {
    name: 'InspectorReclamos',
    permissions: [{ scope: 'reclamos', resource: '*', action: '*' }],
  },
  // {
  //   name: 'JefeAreaReclamos',
  //   permissions: [{ scope: 'reclamos', resource: '*', action: 'onlyRead' }],
  // },
]

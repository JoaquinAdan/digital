export const userMock = {
  id: 1,
  name: 'Joaquin Rodriguez',
  email: 'rodriguezjdev@gmail.com',
  roles: [
    {
      name: 'Digital',
      permissions: [{ scope: '*', resource: '*', action: '*' }],
    },
    // {
    //   name: 'InspectorReclamos',
    //   permissions: [{ scope: 'reclamos', resource: 'detail', action: 'authorize' }],
    // },
    // {
    //   name: 'ServicioSocialEncuestas',
    //   permissions: [{ scope: 'social', resource: 'encuesta', action: '*' }],
    // },
    // {
    //   name: 'ServicioSocial',
    //   permissions: [{ scope: 'social', resouce: null, action: '*' }],
    // },
  ],
}

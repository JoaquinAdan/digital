interface Permissions {
  scope: string | '*'
  resource: string | '*'
  action: string | '*'
}

interface Roles {
  name: string
  permissions: Permissions[]
}

export interface User {
  id: number
  name: string
  email: string
  roles: Roles[]
}

export const user = async (): Promise<User | null> => {
  return new Promise<User | null>((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Joaquin Rodriguez',
        email: 'rodriguezjdev@gmail.com',
        roles: [
          // {
          //   name: 'Admin',
          //   permissions: [{ scope: '*', resource: '*', action: '*' }],
          // },
          {
            name: 'InspectorReclamos',
            permissions: [{ scope: 'reclamos', resource: 'reclamo', action: 'updateSelf' }],
          },
          {
            name: 'CocineroSigic',
            permissions: [{ scope: 'sigic', resource: 'event', action: '*' }],
          },
          // {
          //   name: 'Vecino',
          //   permissions: [
          //     {scope: 'public', resource: '', action: ''}
          //   ]
          // }
        ],
      })
    }, 1000)
  })
}

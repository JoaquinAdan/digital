<<<<<<< README.md

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Roles en la aplicación:

# PUBLICS - publics

Rol por default para vistas que no necesitan iniciar sesión

# NEIGHBOR - neighbor

Rol para vecinos que necesitan iniciar sesión para ver contenido de vistas

# ADMIN - admin

Rol para administradores que necesitan iniciar sesión para ver contenido de vistas administrativas del municipio

# DIGITAL - digital

Rol para desarrolladores o personal seleccionado para mantener el totalidad de la aplicación y acceder a vistas de administración de la aplicación

## Rutas protegidas

La rutas protegidas de la aplicación funcionan de 3 maneras diferentes:

- Los archivos .routes.tsx de rutas [publics] se envuelven con el componente <PublicRoute> ubicado en '@/modules/shared/components/routes/public-route'
- Los archivos .routes.tsx de rutas [neighbor] se envuelven con ?
- Los archivos .routes.tsx de rutas [admin] y [digital] se envuelven con <ProtectedRoute> ubicado en '@/modules/shared/components/routes/protected-route' este se encargara de validar los permisos de cada usuario para permitir el acceso a la ruta y tambien de si tiene una sesión activa

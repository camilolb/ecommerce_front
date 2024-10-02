# Next E-commerce

Este es un proyecto de e-commerce construido con Next.js, utilizando una estructura de carpetas organizada para facilitar la escalabilidad y el mantenimiento.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura:

```
next-ecommerce/
│
├── public/                # Archivos estáticos como imágenes y fuentes
├── src/                   # Código fuente de la aplicación
│   ├── assets/            # Recursos estáticos utilizados en la aplicación
│   ├── components/        # Componentes reutilizables de la UI
│   ├── hooks/             # Hooks personalizados, como React Query
│   ├── layouts/           # Diseños de página reutilizables
│   ├── pages/             # Páginas de la aplicación (Next.js usa un sistema basado en rutas)
│   ├── services/          # Servicios y llamadas a APIs utilizando Axios
│   ├── store/             # Configuración de Redux Toolkit para el manejo del estado global
│   ├── types/             # Definiciones de tipos para TypeScript
│   └── utils/             # Utilidades y funciones helper
├── .env                   # Variables de entorno
├── next.config.js         # Configuración de Next.js
├── package.json           # Dependencias del proyecto
└── tsconfig.json          # Configuración de TypeScript
```

## Instalación

Para instalar las dependencias del proyecto, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone
   cd next-ecommerce
   ```

2. Instala las dependencias usando Yarn o npm:

   ```bash
   yarn install
   ```

   o con npm:

   ```bash
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias, por ejemplo:

   ```env
   NEXT_PUBLIC_ANALYTICS_ID=UA-114361661-6
   NEXT_PUBLIC_URL=http://api.proyecto.com
   ```

2. Asegúrate de configurar los servicios de Axios en la carpeta `src/services` para apuntar a las URL de tu backend.

## Ejecución del Proyecto

Para ejecutar el proyecto en modo de desarrollo:

```bash
yarn dev
```

o

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`.

## Scripts Disponibles

- `yarn dev`: Ejecuta el proyecto en modo de desarrollo.
- `yarn build`: Compila el proyecto para producción.
- `yarn start`: Inicia el servidor de producción después de compilar.
- `yarn lint`: Ejecuta el linter para encontrar errores en el código.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para el desarrollo de aplicaciones de servidor y cliente.
- **React Query y Axios**: Para la obtención y gestión de datos de APIs.
- **Redux Toolkit**: Para el manejo del estado global de la aplicación.
- **TypeScript**: Para tipado estático y mejora en la calidad del código.

---

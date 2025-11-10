# 📚 API - Sistema de Libros

Servidor backend construido con **Node.js + Express** que expone endpoints para:
- autenticación con JWT (`/oauth/login`)
- gestión de libros (`/libros`)
- gestión de estados (`/estados`)
- documentación con Swagger (`/api-docs`)
- protegido con CORS para el cliente Angular (`http://localhost:4200`)

---

## 🚀 Requisitos

- Node.js 18+ (mejor 20)
- Base de datos SQL Server
- npm

---

## 🔧 Instalación

```bash
npm install

## Configuracion de variables de entorno

PORT=3000


JWT_SECRET=tu_clave_secreta
JWT_EXPIRES_IN=1d


DB_USER=sa
DB_PASSWORD=tu_password
DB_SERVER=localhost
DB_DATABASE=NombreDeLaBD
DB_PORT=1433


##Como ejecutar

npm run dev



## Los srcripts de la base de datos
./scripts db/cargue.libros.sql
./scripts db/db.sql

#El proyecto correra por el puerto 3000

http://localhost:3000


## Las cors estan habilitadas para la url 
origin: http://localhost:4200



# 📚 Frontend - Sistema de Libros (Angular)

Aplicación **Angular** que consume la API del sistema de libros.  
Permite:

- iniciar sesión contra el backend (`/oauth/login`)
- listar libros con paginación de Angular Material
- filtrar por texto, estado y año
- crear libros (dialog)
- editar libros (dialog)
- eliminar libros
- proteger rutas con `authGuard` y token en `localStorage`

---

## 🛠️ Tecnologías

- Angular 19 (cliente)
- Angular Material (card, table, paginator, dialog, form-field, input, select, button)
- RxJS / HttpClient
- PrimeNG lo tienes instalado, pero la pantalla de libros está hecha con Material

---

## 🚀 Requisitos

- Node.js 20
- Angular CLI (global):

```bash
npm install -g @angular/cli


## Como correrlo

## npm install

## ng serve

##puerto por donde corre la aplicacion

http://localhost:4200



#Configuracion de la url de la api,
// src/settings/appsettings.ts
export const appsettings = {
  apiUrl: 'http://localhost:3000/'
};


autenticacion

localStorage.setItem('token', data.token);



estructura de carpetas
src/app/
  Components/
    login/
      login.component.ts
      login.component.html
    libros/
      libros.component.ts
      libros.component.html
    libro-detalle/
      libro-detalle.component.ts   # dialog para editar
    agregar-libro/
      agregar-libro.component.ts   # dialog para crear
  services/
    acceso.service.ts
    libro.service.ts
  interfaces/
    login.ts
    libros.ts
    librosResponse.ts
  settings/
    appsettings.ts
  app.routes.ts


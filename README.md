<<<<<<< HEAD
# Sistema de Gestión de Productos y Carritos  

Este proyecto implementa una API REST para la gestión de productos y carritos de compra, con interfaz web utilizando Handlebars. La aplicación permite administrar productos, crear carritos, agregar productos a los carritos y visualizarlos en un entorno web.  

## Tecnologías utilizadas  

- Node.js  
- Express  
- MongoDB (con Mongoose)  
- Handlebars (motor de plantillas)  
- Bootstrap (para el diseño frontend)  

## Requisitos previos  

- Node.js 14.x o superior  
- MongoDB (local o en la nube)  

## Instalación  

1. Clonar el repositorio:



2. Instalar dependencias:
npm install


3. Configurar las variables de entorno:  
- Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
PORT=8080
MONGODB_URI=mongodb://localhost:27017/ecommerce

Nota: Ajusta la URL de MongoDB según tu configuración.  

4. Iniciar la aplicación:
npm run dev


## Estructura de la API  

### Productos  

- `GET /api/products`: Obtiene todos los productos (con soporte para paginación, ordenamiento y filtros)  
- `GET /api/products/:id`: Obtiene un producto por su ID  
- `POST /api/products`: Crea un nuevo producto  
- `PUT /api/products/:id`: Actualiza un producto existente  
- `DELETE /api/products/:id`: Elimina un producto  

Parámetros de consulta opcionales para `GET /api/products`:  
- `limit`: Limita el número de resultados (ej. ?limit=10)  
- `page`: Página a mostrar (ej. ?page=2)  
- `sort`: Ordenamiento por precio ("asc" o "desc")  
- `query`: Filtros de búsqueda (ej. ?query={"category":"electronics"})  

### Carritos  

- `POST /api/carts`: Crea un nuevo carrito  
- `GET /api/carts/:cid`: Obtiene un carrito por su ID  
- `POST /api/carts/:cid/products/:pid`: Agrega un producto al carrito  
- `PUT /api/carts/:cid`: Actualiza todo el carrito  
- `PUT /api/carts/:cid/products/:pid`: Actualiza la cantidad de un producto en el carrito  
- `DELETE /api/carts/:cid/products/:pid`: Elimina un producto del carrito  
- `DELETE /api/carts/:cid`: Elimina un carrito  

## Interfaz Web  

- `/products`: Muestra todos los productos con paginación  
- `/products/:pid`: Muestra los detalles de un producto específico  
- `/carts/:cid`: Muestra el contenido de un carrito específico  

## Colecciones de Postman  

Las colecciones de Postman están disponibles en la carpeta `.collections` para facilitar las pruebas de la API.  

## Datos de prueba  

La base de datos debe estar poblada con datos previos para probar la funcionalidad. Puedes usar las colecciones de Postman para crear productos y carritos de prueba.  

## Licencia  

Este proyecto está bajo la Licencia MIT.

Este proyecto implementa un sistema completo de gestión de productos y carritos según los requerimientos especificados, incluyendo:

Modelo de productos con paginación, ordenamiento y filtrado
Modelo de carritos con referencia a productos
Endpoints completos para CRUD de productos y carritos
Vistas con Handlebars para visualizar productos y carritos
Funcionalidad para agregar productos al carrito
Colecciones de Postman para pruebas
La arquitectura está bien organizada siguiendo un patrón MVC (Modelo-Vista-Controlador), lo que facilita su mantenimiento y extensión. El código está estructurado de manera modular y sigue buenas prácticas de programación.
=======
# Sistema de Gestión de Productos y Carritos  

Este proyecto implementa una API REST para la gestión de productos y carritos de compra, con interfaz web utilizando Handlebars. La aplicación permite administrar productos, crear carritos, agregar productos a los carritos y visualizarlos en un entorno web.  

## Tecnologías utilizadas  

- Node.js  
- Express  
- MongoDB (con Mongoose)  
- Handlebars (motor de plantillas)  
- Bootstrap (para el diseño frontend)  

## Requisitos previos  

- Node.js 14.x o superior  
- MongoDB (local o en la nube)  

## Instalación  

1. Clonar el repositorio:



2. Instalar dependencias:
npm install


3. Configurar las variables de entorno:  
- Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
PORT=8080
MONGODB_URI=mongodb://localhost:27017/ecommerce

Nota: Ajusta la URL de MongoDB según tu configuración.  

4. Iniciar la aplicación:
npm run dev


## Estructura de la API  

### Productos  

- `GET /api/products`: Obtiene todos los productos (con soporte para paginación, ordenamiento y filtros)  
- `GET /api/products/:id`: Obtiene un producto por su ID  
- `POST /api/products`: Crea un nuevo producto  
- `PUT /api/products/:id`: Actualiza un producto existente  
- `DELETE /api/products/:id`: Elimina un producto  

Parámetros de consulta opcionales para `GET /api/products`:  
- `limit`: Limita el número de resultados (ej. ?limit=10)  
- `page`: Página a mostrar (ej. ?page=2)  
- `sort`: Ordenamiento por precio ("asc" o "desc")  
- `query`: Filtros de búsqueda (ej. ?query={"category":"electronics"})  

### Carritos  

- `POST /api/carts`: Crea un nuevo carrito  
- `GET /api/carts/:cid`: Obtiene un carrito por su ID  
- `POST /api/carts/:cid/products/:pid`: Agrega un producto al carrito  
- `PUT /api/carts/:cid`: Actualiza todo el carrito  
- `PUT /api/carts/:cid/products/:pid`: Actualiza la cantidad de un producto en el carrito  
- `DELETE /api/carts/:cid/products/:pid`: Elimina un producto del carrito  
- `DELETE /api/carts/:cid`: Elimina un carrito  

## Interfaz Web  

- `/products`: Muestra todos los productos con paginación  
- `/products/:pid`: Muestra los detalles de un producto específico  
- `/carts/:cid`: Muestra el contenido de un carrito específico  

## Colecciones de Postman  

Las colecciones de Postman están disponibles en la carpeta `.collections` para facilitar las pruebas de la API.  

## Datos de prueba  

La base de datos debe estar poblada con datos previos para probar la funcionalidad. Puedes usar las colecciones de Postman para crear productos y carritos de prueba.  

## Licencia  

Este proyecto está bajo la Licencia MIT.

Este proyecto implementa un sistema completo de gestión de productos y carritos según los requerimientos especificados, incluyendo:

Modelo de productos con paginación, ordenamiento y filtrado
Modelo de carritos con referencia a productos
Endpoints completos para CRUD de productos y carritos
Vistas con Handlebars para visualizar productos y carritos
Funcionalidad para agregar productos al carrito
Colecciones de Postman para pruebas
La arquitectura está bien organizada siguiendo un patrón MVC (Modelo-Vista-Controlador), lo que facilita su mantenimiento y extensión. El código está estructurado de manera modular y sigue buenas prácticas de programación.
>>>>>>> 586b1c412d9af4bb1d10f55fc247c3ae84f1ce60

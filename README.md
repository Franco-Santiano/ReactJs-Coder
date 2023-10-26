# Esta aplicacion fue creada con Create React App [Create React App](https://github.com/facebook/create-react-app).

## Scripts

Dentro del directo del proyecto, puedes ejecutar:

### `npm install`

Ejecuta este comando para instalar las librerias dependientes para el funcionamiento de la App

### `npm start`

Ejecuta la aplicacion en modo Desarrollador.
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La pagina recargara cuando tu hagas cambios.
Tambien puedes ver lint errores en la consola.

Para desarrollar las funcionalidades necesarias para el proyecto de una aplicacion de tipo e-Commerce se realizaron componentes tanto de presentacion (NavBar, Item, entre otros), como asi tambien, componentes contenedores (ItemList, ItemDetail, Checkout, CartItem, etc).

# Navbar (dentro de la carpeta NavBar)

Componente utilizado para contener los links pertinentes a la navegación dentro de la app, junto con el logo e icono del carrito.

# CartWidget (dentro de la carpeta CartWidget)

Componente del ícono del carrito de compras con la navegacion correspondiente hacia el listado del carrito.

# Item (dentro de la carpeta Item)

Componente de presentacion de los productos dentro de la lista de los mismos.

# ItemList (dentro de la carpeta ItemList)

Componente encargado de realizar el mapeo de los items con las props correspondientes.

# ItemListContainer (dentro de la carpeta ItemListContainer)

Componente contenedor encargado de obtener la informacion de los productos desde la base de datos para luego transmitirlos al itemList.

# ItemDetailContainer (dentro de la carpeta ItemDetailContainer)

Componente contenedor encargado de obtener la informacion de un producto especifico desde la base de datos para luego transmitirlo al ItemDetail.

# ItemDetail (dentro de la carpeta ItemDetail)

Componente de presentacion con los estilos y propiedades necesarias para tomar la información que envía ItemDetailContainer y mostrar el detalle del producto seleccionado.

# ItemCount (dentro de la carpeta ItemCount)

Componente para agregar o quitar n productos al carrito desde la sección de detalles del producto.

# Cart (dentro de la carpeta Cart)

Componente para generar el carrito de compras recibiendo la información que genera CartContext.

# Checkout (dentro de la carpeta Checkout)

Componente para generar el paso final del proceso de compras, donde el cliente ingresa sus datos y realiza el pago.

# CartContext (dentro de la carpeta contex)

Componente con toda la logica pertinente al carrito que se utiliza para transmitir informacion y estados como asi tambien los cambios de los mismos entre distintos componentes.

### Librerias externas usadas:

# React-Hook-Form:

Utilizada para aumentar la eficiencia y eficacia a la hora de desarrollar formularios ya que posee una facil implementacion de autenticacion de los mismos como validacion.

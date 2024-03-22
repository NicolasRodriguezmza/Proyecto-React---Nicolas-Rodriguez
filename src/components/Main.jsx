import UserCard from "./ItemListContainer";

function Main() {
  return (
    <main>
      <section className="carta_de_usuarios">
        <UserCard name="Pablo" age="24" />
        <UserCard name="Nicolas" age="24" />
      </section>
      
      <div class="ingresosNuevos">
        <h2>Nuevos Ingresos</h2>
        <div class="imagenes">
          <div class="producto">
            <p>producto1</p>
            <div class="descripcion">
              <h4 class="precio">$ 15.000</h4>
              <h4 class="agregarAlCarrito">AGREGAR AL CARRITO</h4>
            </div>
          </div>
          <div class="producto">
            <p>producto2</p>

            <div class="descripcion">
              <h4 class="precio">$ 15.000</h4>
              <h4 class="agregarAlCarrito">AGREGAR AL CARRITO</h4>
            </div>
          </div>
          <div class="producto">
            <p>produco3</p>
            <div class="descripcion">
              <h4 class="precio">$ 15.000</h4>
              <h4 class="agregarAlCarrito">AGREGAR AL CARRITO</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="quienesSomos">
        <h2>Quienes somos?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque
          optio in officiis, delectus ea perferendis eum quisquam at, iste,
          maiores sapiente commodi praesentium unde vitae ratione assumenda illo
          corrupti.
        </p>
      </div>
      <div class="productosDisponibles">
        <h2>Productos Disponibles</h2>
      </div>
    </main>
  );
}

export default Main;

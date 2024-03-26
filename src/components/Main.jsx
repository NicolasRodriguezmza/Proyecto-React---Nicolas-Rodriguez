import ItemListContainer from "./ItemListContainer";

function Main() {
  return (
    <main>
      <div className="ingresosNuevos">
        <section className="producto">
          <ItemListContainer name="Bikini azul"  precio="  10000 $"/>
        </section>

        <section className="producto">
          <ItemListContainer name="Bikini verde" precio=" 75000 $"/>
        </section>

        <section className="producto">
          <ItemListContainer name="Bikini roja"  precio=" 80000 $"/>
        </section>
     </div>
      
   
    </main>
  );
}

export default Main;

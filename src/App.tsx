
import Guitarra from './components/Guitarra'
import Header from './components/Header'
import { db } from './data/db'
import { useEffect, useState } from 'react'
import { useCart } from './hooks/useCart'
import { useState } from 'react';


function App() {
  const {data,cart, setCart, setPermStorage, //
     removeFromCart, clearCart, totalCart, isEmpty, addGuitar, removeGuitar} = useCart()

  const [login,setLogin] = useState("")

  setLogin("[10,10]")
  console.log(login);


  // Mandarle unicamente al cart al localStorage (como array)


  // const nuevaDB = [...db,nuevoData]

  // Si haces esto genera demasiados renders porque primero se cera y se llama o algo asi
  // setData(nuevaDB)


  return (

    <>
      <Header
        key={cart.id}
        cart={cart}
        setCart={setCart}
        setPermStorage={setPermStorage}
        removeFromCart={removeFromCart}
        clearCart= {clearCart}
        totalCart = {totalCart} 
        isEmpty = {isEmpty}
        addGuitar = {addGuitar} 
        removeGuitar = {removeGuitar}
      />



      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map(
            (guitar) => (
              <Guitarra
                // Al pasar props debemos de pasar una key que es su id
                key={guitar.id}
                guitar={guitar}
                cart={cart}
                setCart={setCart}
                setPermStorage={setPermStorage}
              />
            )
          )}

        </div>

      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">

          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App

//Tenemos dos hooks que instanciamos en diferentes lugares, hay que convertilos en 1 para que no tire errores
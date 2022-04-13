import React from "react";

import Map from "../components/Map"
import credentials from "../credentials"



function Home(props) {
  const enviarDatos = () => <p>hola</p>;
  const handleInputChange = () => <p>hola</p>;
 const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${credentials}`
  

  

  return (
    <div
      className="flex space-x-72 sm:px-10 justify-center items-center h-screen bg-cyan-800"
     
    >
      <form
        className="w-5/12 mt-8 space-y-6 bg-nico-500 p-5 sm:rounded shadow-3xl"
        onSubmit={enviarDatos}
      >
        <div className="">
          <input
            type="text"
            placeholder="Nombre"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
            onChange={handleInputChange}
            name="nombre"
          ></input>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Email"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Telefono"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
            onChange={handleInputChange}
            name="telefono"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Mensaje"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
            onChange={handleInputChange}
            name="mensaje"
          />
        </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enviar
        </button>
      </form>
    <div className="w-8/12 space-y-5 bg-nico-500 p-1 sm:rounded shadow-3xl">
    <Map
       googleMapURL= {mapUrl}
       containerElement= {<div style={{height: '600px'}}/>}
       mapElement= {<div style={{height:'100%'}}/>}
       loadingElement= {<p>Carga</p>}
      />
    </div>


    </div>
  );
}

export default Home;


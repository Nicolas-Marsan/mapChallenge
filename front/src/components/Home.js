import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import Map from "../components/Map";
import Spinner from "./Spinner";

function Home(props) {
  const { register, errors, handleSubmit } = useForm();
  const mapUrl = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD3ngevfqXCIfiv2k95L1q5cBGb2zjluIA`;
  const [places, setPlaces] = useState([]);
  

  useEffect(() => {
    loadData();

  }, []);

  const loadData = async () => {
    const res = await fetch("http://localhost:3000/places");
    const data = await res.json();
    setPlaces(data.places);
    console.log(data.places[0].coordx);
  };
  const onSubmit = async (data) => {
    await Axios.post("http://localhost:3000/places", {
      name: data.name,
      address: data.address,
      phone: data.phone,
      category: data.category,
      coordx: data.coordx,
      coordy: data.coordy,
    });
    loadData();
    
    
  };

  return (
    
        <>
          <div className="flex space-x-72 sm:px-10 justify-center items-center h-screen bg-cyan-800">
            <form
              className="w-5/12 mt-8 space-y-6 bg-nico-500 p-5 sm:rounded shadow-3xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Nombre"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
                name="name"
                {...register("name", { required: true, message: "necesario" })}
              ></input>
              <span role="alert">{errors?.name?.message}</span>
              <input
                type="text"
                placeholder="Direccion"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
                name="address"
                {...register("address", {
                  required: true,
                  message: "necesario",
                })}
              />

              <input
                type="text"
                placeholder="Telefono"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
                name="phone"
                {...register("phone", { required: true, message: "necesario" })}
              />

              <input
                type="text"
                placeholder="Categoria"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
                name="category"
                {...register("category", {
                  required: true,
                  message: "necesario",
                })}
              />

              <input
                type="text"
                placeholder="CoordX"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
                name="coordx"
                {...register("coordx", {
                  required: true,
                  message: "necesario",
                })}
              />

              <input
                type="text"
                placeholder="CoordY"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-nico-1000"
                name="coordy"
                {...register("coordy", {
                  required: true,
                  message: "necesario",
                })}
              />
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </form>
            <div className="w-8/12 space-y-5 bg-nico-500 p-1 sm:rounded shadow-3xl">
              <Map
              places={places}
                googleMapURL={mapUrl}
                containerElement={<div style={{ height: "600px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                loadingElement={<p>Carga</p>}
              />
            </div>
          </div>
        </>
      
    
  );
}

export default Home;

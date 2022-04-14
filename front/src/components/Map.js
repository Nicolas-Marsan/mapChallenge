import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Map = (props) => {
  const [infoMark, setInfoMark] = useState(null);
  const [SelectedPlaces, setSelectedPlaces] = useState(null);
  const [places, setPlaces] = useState([]);
  const [ready, setready] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch("http://localhost:3000/places");
    const data = await res.json();
    setPlaces(data);
    console.log(data.places[0].coordx);
    setready(false);
    console.log(ready)
  };

  return (
    <>
      {ready ? (
        <Spinner />
      ) : (
        <>
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{ lat: -34.6073093, lng: -58.5201057 }}
        >
          {places.places.map((place) => (
            <Marker
              key={place.id}
              position={{
                lat: parseFloat(place.coordx),
                lng: parseFloat(place.coordy),
              }}
              onClick={() =>{
                setSelectedPlaces(place);
              }}
            />
          ))}

        {SelectedPlaces && (
          <InfoWindow
           position={{
            lat: parseFloat(SelectedPlaces.coordx),
            lng: parseFloat(SelectedPlaces.coordy),
           }}
           onCloseClick={()=>{
             setSelectedPlaces(null)
           }}
           >
             <div>
             <div>{SelectedPlaces.name}</div>
             <div>{SelectedPlaces.address}</div>
             <div>{SelectedPlaces.phone}</div>
             <div>{SelectedPlaces.category}</div>
             </div>
           </InfoWindow>
        )}
          

        </GoogleMap>
        </>
      )}
    </>
  );
};

export default withScriptjs(withGoogleMap(Map));

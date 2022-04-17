import React from "react";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Map = ({places}) => {
  const [SelectedPlaces, setSelectedPlaces] = useState(null);

  
  
  
  
console.log(SelectedPlaces)
  return (
    <>
      {!places.length ? (
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.6073093, lng: -58.5201057 }}
      />
      ) : (
        <>
          <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: -34.6073093, lng: -58.5201057 }}
          >
            {places.map((place) => (
              <Marker
                key={place.id}
                position={{
                  lat: parseFloat(place.coordx),
                  lng: parseFloat(place.coordy),
                }}
                onClick={() => {
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
                onCloseClick={() => {
                  setSelectedPlaces(null);
                }}
              >
                <div>
                  <p>{SelectedPlaces.name}</p>
                  <p>{SelectedPlaces.address}</p>
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

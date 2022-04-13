import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { useState } from "react";

const Map = (props) => {
  const [infoMark, setInfoMark] = useState(null);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: -34.6073093, lng: -58.5201057 }}
    >
            
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
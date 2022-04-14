import React from "react";
import {TailSpin} from  'react-loader-spinner'



function Spinner(props) {
  return (
    <div className=" flex justify-center items-center w-full h-full p-10">
      <TailSpin color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default Spinner;


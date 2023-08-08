import React from "react";

const Jsx = () => {

  const temperatura = 20  ;

  return (
    <>
      <h2> Frio o Calor?</h2>
      <h4>
        { temperatura > 20 ? 'Calor' : 'Frio'}
      </h4>
    </>
  );
}

export default Jsx;
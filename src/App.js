import React from 'react';
import Card from './cards';
import Data from './obj';

function Dato(value){
  return (

    <Card 
    key ={value.id}
    imgsrc = {value.imgsrc}
    width = {value.width}
      title={value.title}
      names= {value.names}
      link ={value.links}
    />
  )
}
console.log(Dato);

export default Dato;
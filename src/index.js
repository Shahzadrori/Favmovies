import React from 'react';
import ReactDom from 'react-dom';
import Data from './obj';
import Dato from './App';

ReactDom.render(
  <>
  <h1 className='heading'>Listen to Qwali</h1>
  {Data.map(Dato)}
</>,

document.getElementById('root')
)
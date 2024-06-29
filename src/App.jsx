import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cabecalho } from './Home.style'
import Slider from './SliderShow'

function App() {
  return (
  <>
  <Cabecalho>
    <h1>Herois</h1>
  </Cabecalho>
  <Slider />
  </> );
}

export default App;

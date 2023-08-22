import { useState, FormEvent } from 'react'
import './App.css'
import logo from './assets/gasoline.png'

interface resultadoP{
  titulo: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [resultato, setResultado] = useState <resultadoP>()

  function calc(event: FormEvent){
    event.preventDefault();
    let conta = (alcoolInput/gasolinaInput)
    // console.log(conta)

    if(conta <= 0.7){
      setResultado({
        titulo: "Compensa usar Álcool",
        gasolina: formataMoeda(gasolinaInput),
        alcool: formataMoeda(alcoolInput)
      })
    }else{
      setResultado({
        titulo: "Compensa usar Álcool",
        gasolina: formataMoeda(gasolinaInput),
        alcool: formataMoeda(alcoolInput)
      })
    }
  }
  
  function formataMoeda(valor:number){
    let valorFormatado = valor.toLocaleString("pt-br",
    {
      style: "currency",
      currency: "BRL"
    })
    return valorFormatado;
  }

}

export default App

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
  const [resultado, setResultado] = useState <resultadoP>()

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

  return(
    <div>
      <main className='container'>
        <img className='logo' src={logo} alt = 'logo calculator'/>
        <h1 className='titulo'>Qual é a melhor opção?</h1>
        <form className='form' onSubmit={calc}>
          <label>Álcool (preço por litro) : </label>
          <input className='input'
          type='number'
          placeholder='4.90'
          min='1'
          step='0.01'
          required
          value={alcoolInput}
          onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro) : </label>
          <input className='input'
          type='number'
          placeholder='4.90'
          min='1'
          step='0.01'
          required
          value={gasolinaInput}
          onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input className='button' type='submit' value='Calcular'/>

        </form>

        {resultado && Object.keys(resultado).length > 0 &&(
          <section className='resultado'>
            <h2 className='titulo-resultado'> {resultado.titulo}</h2>
            <span> Álcool: {resultado.alcool}</span>
            <span> Gasolina: {resultado.gasolina}</span>
          </section>
        )}

      </main>
    </div>
  )

}

export default App
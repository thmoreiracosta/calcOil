import type { FormEvent } from 'react'
import { useState } from 'react'
import logoImg from '../assets/logo.png'
import './Calculator.css'

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}
export function Calculator() {
  const [gasolinaInput, setGasolinaInput] = useState(0.00)
  const [alcoolInput, setAlcoolInput] = useState(0.00)
  const [resultado, setResultado] = useState<InfoProps>()

  function calcular(event: FormEvent) {
    event.preventDefault()
    const calculo = (alcoolInput / gasolinaInput)
    if (calculo <= 0.7) {
      setResultado({
        title: 'Compensa usar Álcool',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })

    } else {
      setResultado({
        title: 'Compensa usar Gasolina',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }
  }

  function formatarMoeda(valor: number) {
    return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <div>
      <main
        className='container'>
        <img
          className='logo'
          src={logoImg}
          alt="Logo calculadora"
        />
        <h1
          className='title'>
          Qual a melhor opção?
        </h1>

        <form
          action=""
          className='form'
          onSubmit={calcular}
        >
          <label
            htmlFor=""
          >
            Álcool (preço por litro):
          </label>
          <input
            className='input'
            type="number"
            placeholder='4,90'
            min={1}
            step={0.01}
            required={true}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
            value={alcoolInput}
          />

          <label
            htmlFor=""
          >
            Gasolina (preço por litro):
          </label>
          <input
            className='input'
            type="number"
            placeholder='4,90'
            min={1}
            step={0.01}
            required={true}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
            value={gasolinaInput}
          />

          <input
            className='button'
            type="submit"
            value="Calcular"
          />
        </form>

        {resultado && Object.keys(resultado).length > 0 && (
          <section
            className='result'>
            <h2
              className='result-title'>
              {resultado?.title}
            </h2>
            <span
              className='result-gasolina'>
              Gasolina: R$ {resultado?.gasolina}
            </span>
            <span
              className='result-alcool'>
              Álcool: R$ {resultado?.alcool}
            </span>
          </section>
        )}

      </main>
    </div>
  )
}



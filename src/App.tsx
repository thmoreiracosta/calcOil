import './App.css'
import logoImg from './assets/logo.png'

export default function App() {

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
          />

          <input
            className='button'
            type="submit"
            value="Calcular"
          />
        </form>

      </main>
    </div>
  )
}



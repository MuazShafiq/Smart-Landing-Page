import './App.css'
import Background from './components/Background/Background'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Background/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
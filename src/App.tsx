import './App.css'
import Background from './components/Background/Background'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Pattern from './components/Pattern/Pattern'
import Idea from './components/Idea/Idea'
import Competition from './components/Competition/Competition'
import DesignCriteria from './components/DesignCriteria/DesignCriteria'
import Submission from './components/Submission/Submission'
import Prizes from './components/Prizes/Prizes'
import JudgingPanel from './components/JudgingPanel/JudgingPanel'
import JudgingCriteria from './components/JudgingCriteria/JudgingCriteria'
import EventApply from './components/EventApply/EventApply'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Background/>
      <Header/>
      <Hero/>
      <Pattern/>
      <Idea/>
      <Competition/>
      <DesignCriteria/>
      <Submission/>
      <Prizes/>
      <JudgingPanel/>
      <JudgingCriteria/>
      <EventApply/>
      <Footer/>
    </div>
  )
}

export default App
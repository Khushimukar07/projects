
import './App.css'
import Header from './components/Header'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/Home'
import Follow from './components/following'
import Community from './components/Community'
import Notification from './components/Notification'
import QuestionAnswer from './components/Answer'

function App() {


  return (
    <div className='main'>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/follow' element={<Follow/>}/>
    <Route path='/answer' element={<QuestionAnswer/>}/>
    <Route path='/community' element={<Community/>}/>
    <Route path='/notification' element={<Notification/>}/>
  </Routes>
 
  </BrowserRouter>
 

    </div>
  )
}

export default App

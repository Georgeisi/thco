
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'
import HomePage from './pages/HomePage'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes >
    </BrowserRouter>
    
    {/* <Chat/> */}
    </>
  )
}

export default App

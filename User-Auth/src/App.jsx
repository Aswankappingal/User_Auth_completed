import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Studentregister from './Components/Student/Studentregister'
import Studentlogin from './Components/Student/Studentlogin/Studentlogin'
import Studentview from './Components/Student/Studentview/Studentview'
function App() {
 

  return (
    <>
       <BrowserRouter>
       <Routes>

       <Route path='/' Component={Studentregister}/>
       <Route path='/Studentlog' Component={Studentlogin}/>
       <Route path='/Studentview' Component={Studentview}/>


       </Routes>
       </BrowserRouter>
     
    </>
  )
}

export default App

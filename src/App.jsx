import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

import About from './pages/about/About'
import NoPage from './pages/nopage/NoPage'
import Layout from './layout/Layout'
import Home from './pages/home/Home'




const App = () => {
  return (
    <div>
      <BrowserRouter>
            <Routes>  
             <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="about" element={<About/>}/>
             <Route path="*" element={<NoPage/>}/>
             </Route>
            </Routes>
           </BrowserRouter>
     
     
    </div>
  )
}

export default App

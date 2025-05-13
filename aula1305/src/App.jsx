import Inicio from './pages/inicio' 
import Contato from './pages/contato'
import Sobre from './pages/sobre'
import Layout from './components/layout' 
import Produtos from './pages/produtos'
import Perfil from './pages/perfil'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      
        <Route index element={<Inicio/>}/>
        <Route path='sobre' element={<Sobre/>}/>
        <Route path='contato' element={<Contato/>}/>
        <Route path='perfil' element={<Perfil/>}/>
        <Route path='produtos' element={<Produtos/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App

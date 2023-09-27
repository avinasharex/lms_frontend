
import { Route, Routes } from "react-router-dom"

import AboutPage from "./Pages/AboutPage"
import HomePage from "./Pages/HomePage"


function App() {

  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/about" element={<AboutPage></AboutPage>}></Route>
   </Routes>
   </>
  )
}

export default App

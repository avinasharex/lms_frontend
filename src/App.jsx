
import { Route, Routes } from "react-router-dom"

import AboutPage from "./Pages/AboutPage"
import HomePage from "./Pages/HomePage"
import NotFound from "./Pages/NotFound"
import Signup from "./Pages/Signup"


function App() {

  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/about" element={<AboutPage></AboutPage>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
   </Routes>
   </>
  )
}

export default App

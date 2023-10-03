
import { Route, Routes } from "react-router-dom"

import AboutPage from "./Pages/AboutPage"
import Contact from "./Pages/Contact"
import CourseList from "./Pages/Course/CourseList"
import Denied from "./Pages/Denied"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/Login"
import NotFound from "./Pages/NotFound"
import Signup from "./Pages/Signup"


function App() {

  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/courses" element={<CourseList></CourseList>}></Route>
    <Route path="/about" element={<AboutPage></AboutPage>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/denied" element={<Denied></Denied>}></Route>


    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
  
    <Route path="*" element={<NotFound></NotFound>}></Route>
   </Routes>
   </>
  )
}

export default App


import { Route, Routes } from "react-router-dom"

import RequireAuth from "./Auth/RequireAuth"
import AboutPage from "./Pages/AboutPage"
import Contact from "./Pages/Contact"
import CourseDescription from "./Pages/Course/CourseDescription"
import CourseList from "./Pages/Course/CourseList"
import CreateCourse from "./Pages/Course/CreateCourse"
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
    <Route path="/courses/description" element={<CourseDescription></CourseDescription>}></Route>

    <Route element={<RequireAuth allowedRole={["ADMIN"]} />}>
      <Route path="/course/create" element={<CreateCourse></CreateCourse>}></Route>
      </Route>


    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
  
    <Route path="*" element={<NotFound></NotFound>}></Route>
   </Routes>
   </>
  )
}

export default App

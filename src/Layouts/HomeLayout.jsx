import {AiFillCloseCircle} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

import Footer from '../components/Footer'
function HomeLayout({children}) {
    //    const dispatch = useDispatch()
       const navigate = useNavigate()

       // For checking if user is logged in
       const isLoggedIn = useSelector(state=>state?.auth?.isLoggedIn)
       // For displaying the option acc to role
       const role = useSelector(state=> state?.auth?.role)

    function changeWidth(){
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = 'auto'
    }
    function hideDrawer(){
        const element = document.getElementsByClassName('drawer-toggle')
        element[0].checked = false
        // changeWidth()
    }
    function handleLogout(e){
        e.preventDefault()

        // const res = await dispatch(logout())
        // if(res?.payload?.success)

        navigate('/')
    }
    
  return (
    <>
    <div className="min-h-[90vh]" data-theme="dark">
        <div className="drawer absolute left-0 w-fit z-50">
                <input className="drawer-toggle" type="checkbox" id="my-drawer"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">

                    <FiMenu 
                    onClick={changeWidth}
                    size={'32px'}
                    className='font-bold text-white m-4'
                    />

                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className='drawer-overlay'></label>
                    <ul className="menu p-4 w-48 sm:80 bg-base-100 text-base-content relative">
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24}/>
                            </button>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        {isLoggedIn && role === 'ADMIN' &&(
                            <Link to={'/admin/dashboard'}>
                                Admin Dashboard
                            </Link>
                        )}
                        <li>
                            <Link to='/courses'>All Courses</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        {!isLoggedIn && (
                            <div className='w-full flex items-center justify-center'>
                                    <button className='btn-primary px-4 py-1 font-semibold w-full rounded-md'>
                                        <Link to={'/login'}>Login</Link>
                                    </button>
                                    <button className='btn-secondary px-4 py-1 font-semibold w-full rounded-md'>
                                        <Link to={'/signup'}>Signup</Link>
                                    </button>
                            </div>
                        )}
                        {!isLoggedIn && (
                            <div className='w-full flex items-center justify-center'>
                                    <button className='btn-primary px-4 py-1 font-semibold w-full rounded-md'>
                                        <Link to={'/user/profile'}>Profile</Link>
                                    </button>
                                    <button className='btn-secondary px-4 py-1 font-semibold w-full rounded-md'>
                                        <Link onClick={handleLogout}>Logout</Link>
                                    </button>
                            </div>
                        )}
                    </ul>
                </div>
        </div>
        {children}
        <Footer></Footer>
    </div>
    </>
  )
}

export default HomeLayout
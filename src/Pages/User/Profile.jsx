import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout"

function Profile() {
    const userData = useSelector((state)=> state?.auth?.data)
  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex justify-center items-center">
        <div className="flex flex-col gap-4 p-4 roundede-lg w-96 my-10 text-white shadow-[0_0_10px_black]">
          <img src={userData?.avatar?.secure_url} alt="profile image" className="w-40 m-auto rounded-full border border-black" />

          <h1 className="text-xl font-semibold capitalize text-center">{userData?.fullName}</h1>

          <div className="grid grid-cols-2">
            <p>Email: </p> <span>{userData?.email}</span>
            <p>Subscription: </p> <span>{userData?.subscription?.status === 'active' ? "Active": "Inactive"}</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <Link to={'/changepassword'} className="bg-yellow-600 w-1/2 rounded-sm hover:bg-yellow-500 transition-all ease-in-out duration-300 font-semibold py-2 cursor-pointer px-1 text-center">Change Password</Link>

            <Link to={'/user/editprofile'} className="bg-yellow-600 w-1/2 rounded-sm hover:bg-yellow-500 transition-all ease-in-out duration-300 font-semibold py-2 cursor-pointer px-1 text-center">Edit Profile</Link>
          </div>
          {userData?.subscription?.status === 'active' && (
            <button className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 font-semibold py-2 cursor-pointer px-1 text-center rounded-sm">
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  )
}

export default Profile
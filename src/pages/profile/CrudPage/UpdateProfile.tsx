import ComponentManagement from "components/ComponentManagement"
import MainLayout from "layouts/MainLayout"
import { Link } from "react-router-dom"
const UpdateProfile = () => {
    return (
        <MainLayout title="SETTING - SITIKET">
            <div className="h-screen ">
                <div className="border border-transparent border-b-gray-500">
                    <div className="w-full p-3 ">
                        <div className="flex flex-wrap gap-5">
                            <Link to={"/profile"}>
                                <div className="border border-gray-500 p-2 flex justify-center items-center w-30 h-30 rounded-lg">
                                    <i className='bx bx-chevron-left text-2xl font-bold'></i>
                                </div>
                            </Link>
                            <div className="flex justify-center items-center">
                                <h1 className="text-2xl font-semibold ">
                                    Update Profile
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-4 p-3">
                    <ComponentManagement.SimpleInput />
                    <ComponentManagement.SimpleInput placeholder="Email" type="email" />
                    <ComponentManagement.SimpleInput placeholder="sort name" />

                    <button className="w-full bg-blue-800 text-white p-2 mt-10 rounded-lg">
                        Update Data Profile
                    </button>
                </div>

            </div>
        </MainLayout >
    )
}

export default UpdateProfile
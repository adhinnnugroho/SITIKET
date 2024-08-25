import MainMenuCard from "components/card/MainMenuCard"
import MainLayout from "layouts/MainLayout"

const HomePage = () => {
    return (
        <MainLayout title="HOME - SITIKET">
            <div className="bg-blue-500 p-3 h-32 rounded-b-xl">
                <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-1">
                        <h3 className="text-white font-semibold text-3xl mt-3 ml-2">
                            SITIKET
                        </h3>
                    </div>
                    <div className="col-span-1">
                        <i className="bx bx-bell text-4xl text-white flex justify-end mt-3 mr-4" />
                    </div>
                </div>
            </div>

            <div className="bg-white drop-shadow-xl rounded-xl p-3 ml-4 mr-4 -mt-7">
                <div className="relative">
                    <i className='bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'></i>
                    <input
                        className="w-full p-2 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-10">
                <div className="col-span-1 flex justify-center">
                    <MainMenuCard title="Pesawat" icons="plane" />
                </div>
                <div className="col-span-1">
                    <MainMenuCard title="Kereta Api" icons="train"  />
                </div>
                <div className="col-span-1 flex justify-center">
                    <MainMenuCard title="Hotel" icons="building-house"  />
                </div>
            </div>


            <div className="hotel-sections p-3 ml-3">
                <h5 className="text-2xl font-semibold mt-20">
                    Hotel terbaru di SITIKET
                </h5>
                <p className="mt-3 text-black">
                    ingin santai sejenak dari rutinitas harian? Yuk, cobain nginep disini bareng temen dan keluarga
                </p>
            </div>

        </MainLayout>
    )
}

export default HomePage
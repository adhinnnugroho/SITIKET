const HotelCard = ({ HotelName, Rating, HotelImage }: any) => {
    return (
        <div className="border border-gray-300 rounded-lg">
            <img src={HotelImage} alt="" />
            <div className="p-2">
                <h1 className="text-xl font-semibold">
                    {HotelName}
                </h1>

                <div className="flex mt-2 gap-2">
                    {
                        Array.from({ length: Rating }).map((_, index) => (
                            <i key={index} className="bx bxs-star text-yellow-500 font-semibold" />
                        ))
                    }
                </div>


                <h3 className="mt-3 text-xl font-semibold text-red-600">
                    IDR 1.000.000
                </h3>
                <p className="text-gray-500 text-md mt-1 mb-3">
                    Belum termasuk pajak
                </p>
            </div>
        </div>
    )
}

export default HotelCard
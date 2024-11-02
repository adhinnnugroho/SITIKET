import { Link } from "react-router-dom"

const PesanCard = ({ image, link }: any) => {
    return (
        <>
            <div className="block text-center">
                <img src={image} alt="Pesawat" className="w-full" />
            </div>
            <Link to={link}>
                <i className="bx bx-chevron-left text-3xl absolute top-4 left-4 bg-black text-white p-2 rounded-full w-9 h-9 flex justify-center items-center"></i>
            </Link>
        </>
    )
}

export default PesanCard
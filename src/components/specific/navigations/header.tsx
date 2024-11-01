import { useNavigate } from "react-router-dom";

type HeaderPropsType = {
    title: string,
    link?: string | React.MouseEventHandler<HTMLButtonElement>
}

const Header = ({ title, link }: HeaderPropsType) => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-3 items-center p-3 border border-transparent border-b-gray-800">
            <div className="col-span-1 flex justify-start">
                <button onClick={() => {
                    if (typeof link === 'string') {
                        navigate(link);
                    } else {
                        navigate(-1);
                    }
                }} className="px-3 py-1 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
                    <i className='bx bx-chevron-left text-2xl font-bold'></i>
                </button>
            </div>
            <div className="col-span-1 flex justify-center">
                <h2 className="text-2xl font-bold">
                    {title}
                </h2>
            </div>
            <div className="col-span-1 flex justify-end">
                <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                    {/* Optional icon or button */}
                </button>
            </div>
        </div>
    )
}

export default Header;

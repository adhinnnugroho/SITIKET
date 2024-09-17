import { useNavigate } from "react-router-dom";

type PropsType = {
    'title': string,
    'link'?: string | React.MouseEventHandler<HTMLButtonElement>
}
const Header = (prop: PropsType) => {
    const navigate = useNavigate();
    const { title, link } = prop

    return (
        <div className="flex justify-between items-center p-4 dark:bg-black bg-white border-gray-200 transition-all duration-700 ease-in-out">
            <button onClick={() => {
                if (typeof link === 'string') {
                    navigate(link);
                } else {
                    navigate(-1);
                }
            }} className="px-3 py-1 text-gray-600 hover:text-gray-800 rounded-lg border border-gray-300">
                <i className='bx bx-chevron-left text-2xl font-bold'></i>
            </button>
            <p className="text-lg font-semibold">
                {title}
            </p>
            <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
            </button>
        </div>
    )
}

export default Header
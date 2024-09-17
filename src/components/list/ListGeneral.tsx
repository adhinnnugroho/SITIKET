import { Link } from "react-router-dom";

type PropType = {
    title: string;
    link?: string;
    icons: string;
    text?: string;
    onClick?: () => void;
};

const ListGeneral = (prop: PropType) => {
    const { title, link, icons, text = 'text-black', onClick } = prop;

    // Check if link is a valid non-empty string
    const isLinkValid = link && link.trim() !== '';

    return isLinkValid ? (
        <Link to={link}>
            <div className={`flex justify-between items-center rounded-lg mt-4 p-4 
            shadow-md bg-white border border-gray-100 transition-all 
            hover:shadow-lg hover:bg-gray-50 ${text}`}>
                <div className="flex items-center">
                    <i className={`bx bx-${icons} text-3xl mr-3`} />
                    <p className="font-semibold text-xl">
                        {title}
                    </p>
                </div>
                <div>
                    <i className='bx bx-chevron-right text-xl font-semibold'></i>
                </div>
            </div>
        </Link>
    ) : (
        <button className={`flex justify-between items-center rounded-lg mt-4 p-4 
            shadow-md bg-white border w-full border-gray-100 transition-all 
            hover:shadow-lg hover:bg-gray-50 ${text}`} onClick={onClick}>
                <div className="flex items-center">
                    <i className={`bx bx-${icons} text-3xl mr-3 transition-transform  duration-700 ease-in-out`} />
                    <p className="font-semibold text-xl">
                        {title}
                    </p>
                </div>
                <div>
                    <i className='bx bx-chevron-right text-xl font-semibold'></i>
                </div>
        </button>
    );
};

export default ListGeneral;

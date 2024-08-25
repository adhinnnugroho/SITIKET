import { Link } from "react-router-dom"

type PropType = {
    'title': string,
    'link': string,
    'icons': string,
    'text'?: string
}
const ListGeneral = (prop: PropType) => {
    const { title, link, icons, text = 'text-black' } = prop
    return (
        <Link to={link}>
            <div className={`flex justify-between items-center rounded-lg mt-4 p-4 
            shadow-md bg-white border border-gray-100 transition-all 
            hover:shadow-lg hover:bg-gray-50 ${text}`}>
                <div className="flex items-center">
                    <i className={`bx bx-${icons} text-3xl  mr-3 `} />
                    <p className="font-semibold text-xl">
                        {title}
                    </p>
                </div>
                <div className="">
                    <i className='bx bx-chevron-right text-xl font-semibold'></i>
                </div>
            </div>
        </Link>
    )
}

export default ListGeneral
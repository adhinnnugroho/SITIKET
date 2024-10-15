import { Link } from "react-router-dom";



interface PropsType {
    link?: string,
    icon: string
    title: string
}

const ProfileCard = ({ link = '#', icon, title }: PropsType) => {
    return (
        <Link to={link}>
            <div className="flex justify-between items-center rounded-lg mt-4 p-4 shadow-md border w-full border-gray-100 transition-all hover:shadow-lg">
                <div className="flex items-center">
                    <i className={`bx bx-${icon} text-3xl mr-3 transition-transform duration-700 ease-in-out`} />
                    <p className={`font-semibold text-xl transition-opacity duration-700 ease-in-out`}>
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProfileCard
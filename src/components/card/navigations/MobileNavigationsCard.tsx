import { Link, useLocation } from 'react-router-dom';

const MobileNavigationCard = ({to, iconClass, label}: any) => {
    const location = useLocation();
    const isActive  = (path: string) => location.pathname === path;
    return (
        <Link to={to}>
            <div className={`flex items-center justify-center ${isActive(to) ? 'bg-blue-600 text-white rounded-lg p-2' : ''}`}>
                <i className={`bx bx-${iconClass}  ${isActive(to) ? 'text-2xl' : 'text-4xl'}`} ></i>
                {isActive(to) && <span className="ml-2">{label}</span>}
            </div>
        </Link>
    )
}

export default MobileNavigationCard
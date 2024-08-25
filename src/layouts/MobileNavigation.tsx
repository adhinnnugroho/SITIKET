import { Link, useLocation } from "react-router-dom";

const MobileNavigation = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="w-screen fixed bottom-0 bg-white border border-white border-t-gray-400 p-2">
            <div className="grid grid-cols-4 gap-3">
                <Link to='/'>
                    <div className={`flex items-center justify-center ${isActive('/') ? 'bg-blue-600 text-white rounded-lg p-2' : ''}`}>
                        <i className={`bx bx-home ${isActive('/') ? 'text-2xl' : 'text-4xl'}`}></i>
                        {isActive('/') && <span className="ml-1">Home</span>}
                    </div>
                </Link>
                <Link to='/details'>
                    <div className={`flex items-center justify-center ${isActive('/details') ? 'bg-blue-600 text-white rounded-lg p-2' : ''}`}>
                        <i className='bx bx-detail text-4xl'></i>
                        {isActive('/details') && <span className="ml-2">Details</span>}
                    </div>
                </Link>
                <Link to='/copy'>
                    <div className={`flex items-center justify-center ${isActive('/copy') ? 'bg-blue-600 text-white rounded-lg p-2' : ''}`}>
                        <i className='bx bx-copy-alt text-4xl'></i>
                        {isActive('/copy') && <span className="ml-2">Copy</span>}
                    </div>
                </Link>
                <Link to='/profile'>
                    <div className={`flex items-center justify-center ${isActive('/profile') ? 'bg-blue-600 text-white rounded-lg p-2' : ''}`}>
                        <i  className={`bx bx-user ${isActive('/profile') ? 'text-2xl' : 'text-4xl'}`}></i>
                        {isActive('/profile') && <span className=" ml-1 pr-1">Profile</span>}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MobileNavigation;

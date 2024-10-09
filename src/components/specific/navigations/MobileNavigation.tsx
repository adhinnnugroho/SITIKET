import MobileNavigationCard from "components/card/navigations/MobileNavigationsCard";

const MobileNavigation = () => {
    return (
        <div className="w-screen  fixed bottom-0 border border-transparent dark:border-t-gray-100 border-t-gray-600 p-2  dark:bg-black bg-white dark:text-white text-black transition-all duration-700 ease-in-out ">
            <div className="grid grid-cols-3 gap-3">
                <MobileNavigationCard to="/" iconClass="home" label="Home" />
                <MobileNavigationCard to="/ticket" iconClass="detail" label="My Ticket" />
                <MobileNavigationCard to="/profile" iconClass="user" label="Profile" />
            </div>
        </div>
    )
}

export default MobileNavigation;

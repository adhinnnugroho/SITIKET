import MobileNavigationCard from "components/card/navigations/MobileNavigationsCard";

const MobileNavigation = () => {
    return (
        <div className="w-screen  fixed bottom-0 border dark:border-black border-white dark:border-t-gray-700 border-t-gray-400 p-2">
            <div className="grid grid-cols-3 gap-3">
                <MobileNavigationCard to="/" iconClass="home" label="Home" />
                <MobileNavigationCard to="/ticket" iconClass="detail" label="My Ticket" />
                <MobileNavigationCard to="/profile" iconClass="user" label="Profile" />
            </div>
        </div>
    )
}

export default MobileNavigation;

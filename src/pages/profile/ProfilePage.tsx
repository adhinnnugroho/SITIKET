import Header from "components/specific/navigations/header";
import UseToggleThemes from "hooks/themes/useToggleThemes";
import MainLayout from "layouts/MainLayout";

const ProfilePage = () => {
    const { themes, iconsThemes, handleToggleThemes } = UseToggleThemes();
    return (
        <MainLayout>
            <Header title="Setting" link={'/'} />
            <div className="p-4 mb-24">
                <p className="font-semibold text-xl">
                    Settings
                </p>
                <button className={`flex justify-between items-center rounded-lg mt-4 p-4 shadow-md border w-full border-gray-100 transition-all 
                    hover:shadow-lg`} onClick={handleToggleThemes}>
                    <div className="flex items-center">
                        <i className={`bx bx-${iconsThemes} text-3xl mr-3 transition-transform duration-700 ease-in-out 
                        ${themes === 'light' ? 'rotate-0' : 'opacity-100 rotate-[370deg]'}`} />
                        <p className={`font-semibold text-xl transition-opacity duration-700 ease-in-out`}>
                            {themes === 'light' ? 'Light Mode' : 'Dark Mode'}
                        </p>
                    </div>
                </button>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;

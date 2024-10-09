import DarkModeCard from "components/card/DarkModeCard";
import Header from "components/specific/navigations/header";
import UseToggleThemes from "hooks/themes/useToggleThemes";
import MainLayout from "layouts/MainLayout";

const ProfilePage = () => {
    const { themes, iconsThemes, handleToggleThemes } = UseToggleThemes();
    return (
        <MainLayout title="SETTING - SITIKET">
            <Header title="Setting" link={'/'} />
            <div className="mb-[1] pb-20">
                <div className="p-4">
                    <p className="font-semibold text-xl">
                        Profile
                    </p>
                    <div className="flex justify-between items-center rounded-lg mt-4 p-4 shadow-md border w-full border-gray-100 transition-all 
                    hover:shadow-lg">
                        <div className="flex items-center">
                            <i className={`bx bx-user text-3xl mr-3 transition-transform duration-700 ease-in-out`} />
                            <p className={`font-semibold text-xl transition-opacity duration-700 ease-in-out`}>
                                Update Profile
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center rounded-lg mt-4 p-4 shadow-md border w-full border-gray-100 transition-all 
                    hover:shadow-lg">
                        <div className="flex items-center">
                            <i className={`bx bx-lock text-3xl mr-3 transition-transform duration-700 ease-in-out`} />
                            <p className={`font-semibold text-xl transition-opacity duration-700 ease-in-out`}>
                                Change Password
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center rounded-lg mt-4 p-4 shadow-md border w-full border-gray-100 transition-all 
                    hover:shadow-lg">
                        <div className="flex items-center">
                            <i className={`bx bx-mobile-alt text-3xl mr-3 transition-transform duration-700 ease-in-out`} />
                            <p className={`font-semibold text-xl transition-opacity duration-700 ease-in-out`}>
                                Versi Application
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 ">
                    <p className="font-semibold text-xl">
                        Settings
                    </p>
                    <DarkModeCard onclick={handleToggleThemes} iconsThemes={iconsThemes} themes={themes} />
                    <div className="flex justify-between items-center rounded-lg mt-4 p-4 shadow-md border w-full border-gray-100 transition-all 
                    hover:shadow-lg">
                        <div className="flex items-center">
                            <i className={`bx bx-log-in-circle text-3xl mr-3 transition-transform duration-700 ease-in-out`} />
                            <p className={`font-semibold text-xl transition-opacity duration-700 ease-in-out`}>
                                Logout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;

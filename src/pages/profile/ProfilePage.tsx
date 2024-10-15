import ComponentManagement from "components/ComponentManagement";
import UseToggleThemes from "hooks/themes/useToggleThemes";
import MainLayout from "layouts/MainLayout";

const ProfilePage = () => {
    const { themes, iconsThemes, handleToggleThemes } = UseToggleThemes();
    return (
        <MainLayout title="SETTING - SITIKET">
            <ComponentManagement.Header title="Setting" link={'/'} />
            <div className="mb-[1] pb-20">
                <div className="p-4">
                    <p className="font-semibold text-xl">
                        Profile
                    </p>

                    <ComponentManagement.ProfileCard icon={'user'} title={'Update Profile'} />
                    <ComponentManagement.ProfileCard icon={'lock'} title={'Change Password'} />
                    <ComponentManagement.ProfileCard icon={'mobile-alt'} title={'Versi Application'} />
                </div>
                <div className="p-4 ">
                    <p className="font-semibold text-xl">
                        Settings
                    </p>
                    <ComponentManagement.DarkModeCard onclick={handleToggleThemes} iconsThemes={iconsThemes} themes={themes} />
                    <ComponentManagement.ProfileCard icon={'log-in-circle'} title={'Logout  '} />
                </div>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;

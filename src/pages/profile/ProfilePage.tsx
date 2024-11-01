import ComponentManagement from "components/ComponentManagement";
import UseToggleThemes from "hooks/themes/useToggleThemes";
import MainLayout from "layouts/MainLayout";

const ProfilePage = () => {
    const { themes, iconsThemes, handleToggleThemes } = UseToggleThemes();
    return (
        <MainLayout title="SETTING - SITIKET">
            <ComponentManagement.Header title="Setting" link={'/'} />
            <div className="mb-[1] pb-20">
                <ComponentManagement.InfoCard title="Profile">
                    <ComponentManagement.ProfileCard icon={'user'} title={'Update Profile'} />
                    <ComponentManagement.ProfileCard icon={'lock'} title={'Change Password'} />
                    <ComponentManagement.ProfileCard icon={'mobile-alt'} title={'Versi Application'} />
                </ComponentManagement.InfoCard>

                <ComponentManagement.InfoCard title="Settings">
                    <ComponentManagement.DarkModeCard onclick={handleToggleThemes} iconsThemes={iconsThemes} themes={themes} />
                    <ComponentManagement.ProfileCard icon={'log-in-circle'} title={'Logout  '} />
                </ComponentManagement.InfoCard>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;

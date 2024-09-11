import ListGeneral from "components/list/ListGeneral"
import Header from "components/specific/navigations/header"
import MainLayout from "layouts/MainLayout"
const ProfilePage = () => {
    return (
        <MainLayout>
            <Header title="Setting" link={'/'} />

            <div className="p-4 mb-24">
                <p className="font-semibold text-xl">
                    Settings
                </p>

                <ListGeneral title="Edit Profile" link={'/'} icons="user" />
                <ListGeneral title="Edit Password" link={'/'} icons="lock-open-alt" />
                <ListGeneral title="Dark Mode" link={'/'} icons="moon" />
                <div className="mt-10">
                    <p className="font-semibold text-xl">
                        Preferences
                    </p>

                    <ListGeneral title="Help & Support" link={'/'} icons="help-circle" />
                    <ListGeneral title="Logout" link={'/'} icons="chevron-left" text='text-red-600' />
                </div>
            </div>
        </MainLayout>
    )
}

export default ProfilePage
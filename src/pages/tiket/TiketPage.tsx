import ComponentManagement from "components/ComponentManagement";
import Header from "components/specific/navigations/header";
import MainLayout from "layouts/MainLayout";

const TiketPage = () => {
    return <MainLayout title="My Ticket - SITIKET">
        <Header title="My Ticket" />
        <div className="h-screen">
            <ComponentManagement.NotFoundSection title="Ticket Not Found" />
        </div>


    </MainLayout>
};

export default TiketPage;
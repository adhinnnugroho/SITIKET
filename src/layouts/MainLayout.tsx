import ComponentManagement from "components/ComponentManagement";
import useDocumentTitle from "hooks/useDocumentTitle"

interface MainLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const MainLayout = ({ title, children }: MainLayoutProps) => {
    useDocumentTitle(title ?? 'SITIKET')
    return (
        <div className="w-full">
            {children}
            <ComponentManagement.MobileNavigation   />
        </div>
    )
}

export default MainLayout
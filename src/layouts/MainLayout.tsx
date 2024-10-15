import ComponentManagement from "components/ComponentManagement";
import UseToggleThemes from "hooks/themes/useToggleThemes";
import useDocumentTitle from "hooks/useDocumentTitle"
interface MainLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const MainLayout = ({ title, children }: MainLayoutProps) => {
    UseToggleThemes();
    useDocumentTitle(title ?? 'SITIKET')
    return (
        <div className="w-full h-[44rem] dark:bg-black bg-white dark:text-white text-black transition-all duration-700 ease-in-out " id="mainLayouts">
            {children}
            <ComponentManagement.MobileNavigation />
        </div>
    )
}

export default MainLayout
import AssetsManagement from "asset/AssetsManagement"

const NotFoundSection = ({ title = "Page Not Found" }: { title: string }) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="block text-center">
                <img src={AssetsManagement.NotFoundIcon} alt="Not Found" className="w-48" />
                <h1 className="text-2xl font-semibold mt-4">
                    {title}
                </h1>
            </div>
        </div>

    )
}

export default NotFoundSection
type InfoCardProps = {
    title: string,
    children: React.ReactNode
}


const InfoCard = ({ title, children }: InfoCardProps) => {
    return (
        <div className="p-4">
            <p className="font-semibold text-xl">
                {title}
            </p>


            {children}
        </div>
    )
}

export default InfoCard
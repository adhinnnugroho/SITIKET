type typeProps = {
    'title': string,
    'icons': string,
    'background'?: string
}

const MainMenuCard = (prop: typeProps) => {
    const { title, icons, background = 'blue-500'} = prop
    return (
        <div>
            <div className="flex justify-center">
                <i className={`bx bxs-${icons} flex justify-center bg-${background} text-white rounded-full w-14 h-14 text-3xl pt-2`} />
            </div>
            <h3 className="text-center text-xl font-semibold">
                {title}
            </h3>
        </div>
    )
}

export default MainMenuCard
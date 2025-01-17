type PropsType = {
    onclick: () => void,
    iconsThemes: string,
    themes: string
}


const DarkModeCard = ({ onclick, iconsThemes, themes }: PropsType) => {
    return (
        <button className={`flex justify-between items-center rounded-lg mt-4 p-4 shadow-md border w-full border-gray-100 transition-all 
                    hover:shadow-lg`} onClick={onclick}>
            <div className="flex items-center">
                <i className={`bx bx-${iconsThemes} text-3xl mr-3 transition-transform duration-700 ease-in-out 
                        ${themes === 'light' ? 'rotate-0' : 'opacity-100 rotate-[370deg]'}`} />
                <p className={`font-semibold text-xl transition-opacity duration-700 ease-in-out`}>
                    {themes === 'light' ? 'Light Mode' : 'Dark Mode'}
                </p>
            </div>
        </button>
    )
}

export default DarkModeCard
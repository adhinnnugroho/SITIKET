import { useEffect, useState } from "react";


const UseToggleThemes = () => {
    const [themes, setThemes] = useState('light');
    const [iconsThemes, setIconsThemes] = useState('moon');

    const handleToggleThemes = () => {
        setThemes(themes === 'light' ? 'dark' : 'light');
        setIconsThemes(themes === 'light' ? 'sun' : 'moon');


        if (themes === 'light') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem('themes', themes === 'light' ? 'dark' : 'light');
        localStorage.setItem('iconsThemes', themes === 'light' ? 'moon' : 'sun');

    };

    useEffect(() => {
        setThemes(localStorage.getItem('themes') ?? 'light');
        setIconsThemes(localStorage.getItem('iconsThemes') ?? 'moon');
        if (themes === 'light') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    });

    return { themes, iconsThemes, handleToggleThemes };
}

export default UseToggleThemes
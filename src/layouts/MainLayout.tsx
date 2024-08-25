import { useEffect } from "react"
import MobileNavigation from "./MobileNavigation"

type propType = {
    'title'?: string,
    'children'?: React.ReactNode
}
const MainLayout = (prop: propType) => {
    const { title, children } = prop
    useEffect(() => {
        document.title = title ?? 'SITIKET'
    })


    return (
        <div className="w-full">
            {children}

            <MobileNavigation   />
        </div>
    )
}

export default MainLayout
import { useEffect, useState } from "react"
import { fetchNav } from "../Utils/api"
import { Link } from "react-router-dom"

export const Navigation = () => {
    const [navBar, setNavbar] = useState([])

    useEffect(() => {
        fetchNav().then((navFromApi) => {
            setNavbar(navFromApi)
        })
    }, [])

    return (
        <nav className="navigation-container">
                {navBar.map((navItem, index) => {
                    return <Link key={`${navItem.slug}-${index}`} className="navigation-item" to={`/topics/${navItem.slug}`}>{navItem.slug}</Link>
                })}
        </nav>
    )
}
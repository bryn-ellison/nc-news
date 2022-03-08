import { useEffect, useState } from "react"
import { fetchNav } from "../Utils/api"
import { Link } from "react-router-dom"

export const Navigation = () => {
    const [navBar, setNavbar] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchNav().then((navFromApi) => {
            setNavbar(navFromApi)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading nav...</p>
    return (
        <nav className="navigation-container">
            <Link className="navigation-item" to={`/`}>ALL</Link>
            {navBar.map((navItem, index) => {
                return <Link key={`${navItem.slug}-${index}`} className="navigation-item" to={`/topics/${navItem.slug}`}>{navItem.slug.toUpperCase()}</Link>
            })}
        </nav>
    )
}
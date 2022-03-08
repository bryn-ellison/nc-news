import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchSingleArticle } from "../Utils/api"

export const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams()

    useEffect(() => {
        fetchSingleArticle(article_id).then((articleFromApi) => {
            setSingleArticle(articleFromApi)
            setIsLoading(false)
        })
    }, [article_id])
    
    if (isLoading) return <p>Loading your article...</p>
    return (
        <article>
            <h2>{singleArticle.title}</h2>
            <img id="article-image" src={"https://picsum.photos/350/200?random=" + Math.floor(Math.random() * 100)} alt={singleArticle.title}/>
            <dl>
                <dt>{singleArticle.topic.toUpperCase()}</dt>
                <dt>By {singleArticle.author}</dt>
                <dt>Posted on: {singleArticle.topic}</dt>
            </dl>
            <p className="article-text">{singleArticle.body}</p>
        </article>
    )

}
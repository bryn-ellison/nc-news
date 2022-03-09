import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchSingleArticle } from "../Utils/api"
import { timeDate } from "../Utils/timeDate"

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
        <article className="single-article-container">
            <h2 className="single-article-header">{singleArticle.title}</h2>
            <div className="image-info-contianter">
            <dl>
                <dt>{singleArticle.topic.toUpperCase()}</dt>
                <dt>By {singleArticle.author}</dt>
                <dt>Posted on: {timeDate(singleArticle.created_at)}</dt>
            </dl>
            <img id="article-main-image" src={"https://picsum.photos/450/300?random=" + Math.floor(Math.random() * 100)} alt={singleArticle.title}/>
            </div>
            <p className="article-text">{singleArticle.body}</p>
            <Link className="navigation-item" to={`/topics/${singleArticle.topic}`}>Back to {singleArticle.topic.toUpperCase()}</Link>
        </article>
    )

}
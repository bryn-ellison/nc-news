import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticles } from "../Utils/api"
import { timeDate } from "../Utils/timeDate"

export const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { topic_slug } = useParams()

    useEffect(() => {
        fetchArticles(topic_slug).then((articlesFromApi) => {
            setArticles(articlesFromApi)
            setIsLoading(false)
        })
    }, [topic_slug])

    if (isLoading) return <p>Loading articles...</p>
    return (
        <main className="article-container">
            <ul className="article-list">
                {articles.map((article, index) => {
                    return <li key={article.article_id} className="article-list-item">
                        <h3 className="article-title">{article.title}</h3>
                        <dl className="article-info">
                            <img id="article-list-image" src={"https://picsum.photos/200?random=" + Math.floor(Math.random() * 100)} alt={article.title}/>   
                            <div>
                            <dt>Written by: {article.author}</dt>
                            <dt>Posted on: {timeDate(article.created_at)}</dt>
                            <dt>{article.topic.toUpperCase()}</dt>
                            <dt>Votes: {article.votes}</dt>
                            </div>
                        </dl>
                    </li>
                })}
            </ul>
        </main>
        
    )
}
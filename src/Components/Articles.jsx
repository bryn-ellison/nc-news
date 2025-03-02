import { useEffect, useState } from "react"
import { useParams, Link, } from "react-router-dom"
import { fetchArticles } from "../Utils/api"
import { timeDate } from "../Utils/timeDate"
import { Sorting } from "./Sorting"

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
            <Sorting topic={topic_slug} setArticles={setArticles}/>
            <ul className="article-list">
                {articles.map((article, index) => {
                    return <li key={article.article_id} className="article-list-item">
                        <h3 className="article-title">{article.title}</h3>
                        <dl className="article-info">
                            <img id="article-list-image" src={"https://picsum.photos/200?random=" + Math.floor(Math.random() * 100)} alt={article.title}/>   
                            <div>
                            <dt>{article.topic.toUpperCase()}</dt>
                            <dt>Written by: {article.author}</dt>
                            <dt>Posted on: {timeDate(article.created_at)}</dt>
                            <dt>Votes: {article.votes}</dt>
                            </div>    
                        </dl>
                        <Link className="navigation-item" to={`/articles/${article.article_id}`}>Read now</Link>
                    </li>
                })}
            </ul>
        </main>
        
    )
}
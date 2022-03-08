import { useEffect, useState } from "react"
import { fetchArticles } from "../Utils/api"
import { timeDate } from "../Utils/timeDate"

export const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading articles...</p>
    return (
        <main className="article-container">
            <p>Your articles, USERNAME</p>
            <ul className="article-list">
                {articles.map((article, index) => {
                    return <li key={article.article_id} className="article-list-item">
                        <h3 className="article-title">{article.title}</h3>
                        <div className="article-info">   
                            <h5>Written by: {article.author}</h5>
                            <h5>Posted on: {timeDate(article.created_at)}</h5>
                            <h5>{article.topic.toUpperCase()}</h5>
                            <h5>Number of votes: {article.votes}</h5>
                        </div>
                    </li>
                })}
            </ul>
        </main>
        
    )
}
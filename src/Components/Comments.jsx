import { useEffect, useState } from "react"
import { fetchComments } from "../Utils/api";
import { timeDate } from "../Utils/timeDate"
import { PostComment } from "./PostComment";

export const Comments = (article_id) => {
    
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const articleID = article_id.article_id

    useEffect(() => {
        fetchComments(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false)
        })
    }, [article_id])
    
    if (isLoading) return <p>Loading comments...</p>
    return (
        <section className="single-article-container">
            <h3 className="comments-header">Comments</h3>
            <PostComment setComments={setComments} articleID={articleID}/>
            <ul className="article-list">
            {comments.map((comment, index) => {
                return (
                    <li key={comment.comment_id || `review-${index}`} className="article-list-item">
                        <div className="comment-info">
                            <h6>{comment.author}</h6>
                            <p>Posted: {timeDate(comment.created_at)}</p>
                            <p>Votes: 0</p>
                        </div>
                        <p className="article-text">{comment.body}</p>
                    </li>
                )
            })}
            </ul>
        </section>
        
    )
}
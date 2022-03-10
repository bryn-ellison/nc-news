import { useState } from "react"
import { postComment } from "../Utils/api"

export const PostComment = ({ setComments, articleID } ) => {
    const [comment, setComment] = useState("")
    const [isErr, setIsErr] = useState(false)
    
    const handleChange = (event) => {
        setComment(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            author: "tickle122",
            body: comment,
            created_at: Date.now()
        };
        setIsErr(false);
        setComment("");
        setComments((currentComments) => {
            return [newComment, ...currentComments]
        })
        postComment(articleID, {username: newComment.author, body: newComment.body})
        .catch((err) => {
            setIsErr(true);
            setComments((currentComments) => {
                return currentComments.slice(1);
            })
        })
    }

    return (
        <>
        <form className="comment-form" onSubmit={handleSubmit}>
            <label>Comment here: 
                <input className="comment-input" type="TextArea" value={comment} onChange={handleChange}/>
            </label>
            <button className="comment-submit" type="submit">Submit</button>
        </form>
        {isErr ? <p>Your comment was not submitted, please try again</p> : null}
        </>
    )
}
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchArticles } from "../Utils/api";



export const Sorting = ({topic, setArticles}) => {

    const [sortBy, setSortBy] = useState("created_at")
    let [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (event) => {
        setSortBy(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = sortBy
        setSearchParams(`sort_by=${params}`);
        fetchArticles(topic, params).then((sortedArticles) => {
            setArticles(sortedArticles)
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Sort articles by: 
                <select value={sortBy.value} onChange={handleChange}>
                    <option value="created_at">Date</option>
                    <option value="author">Author</option>
                    <option value="comment_count">Number of comments</option>
                    <option value="votes">Votes</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
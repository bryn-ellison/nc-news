import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchArticles } from "../Utils/api";



export const Sorting = ({topic, setArticles}) => {

    const [values, setValues] = useState({sort_by: "created_at", order: "desc"})
    let [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const sortBy = values.sort_by
        const order = values.order
        setSearchParams(`sort_by=${sortBy}`);
        fetchArticles(topic, sortBy, order).then((sortedArticles) => {
            setArticles(sortedArticles)
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Sort articles by: 
                <select name="sort_by" value={values.sort_by} onChange={handleChange}>
                    <option value="created_at">Date</option>
                    <option value="author">Author</option>
                    <option value="comment_count">Number of comments</option>
                    <option value="votes">Votes</option>
                </select>
            </label>
            <label>
                Order:
                <select name="order" value={values.order} onChange={handleChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
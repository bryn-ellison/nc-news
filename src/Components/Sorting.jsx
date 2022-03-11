export const Sorting = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Sort articles by: 
                <select>
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
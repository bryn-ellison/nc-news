import { useState } from "react"
import { BsFillCaretDownSquareFill, BsFillCaretUpSquareFill } from "react-icons/bs"
import { patchArticle } from "../Utils/api"

export const Voting = ({ votes, article_id }) => {

    const [votesCount, setVotesCount] = useState(votes)
    const [err, setErr] = useState(null);
    const [disable, setDisable] = useState(false);
  
    const handleClick = (voteClick) => {
        setVotesCount((currentVotes) => currentVotes + voteClick);
        setErr(null)
        setDisable(true)
        patchArticle(article_id, voteClick).catch((err) => {
            if (voteClick === 1) {setVotesCount((currentVotes) => currentVotes - 1)}
            else {setVotesCount((currentVotes) => currentVotes + 1)}
            setErr('Vote didn\'t work, please try again.');
            setDisable(false)
        })
    }
    return (
        <section className="voting-module">
        <p>Votes: {votesCount}</p>
        <button className="votes-button" disabled={disable} onClick={() => handleClick(-1)}><BsFillCaretDownSquareFill /></button>
        <button className="votes-button" disabled={disable} onClick={() => handleClick(1)}><BsFillCaretUpSquareFill /></button>
        {err? <p>{err}</p>: null}
        </section>
    )
}
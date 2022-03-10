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
    if (err) return <><p>{err}</p><section className="voting-module">
    <p>Votes: {votesCount}</p>
    <button disabled={disable} onClick={() => handleClick(-1)}><BsFillCaretDownSquareFill /></button>
    <button disabled={disable} onClick={() => handleClick(1)}><BsFillCaretUpSquareFill /></button>
    </section></>;
    return (
        <section className="voting-module">
        <p>Votes: {votesCount}</p>
        <button disabled={disable} onClick={() => handleClick(-1)}><BsFillCaretDownSquareFill /></button>
        <button disabled={disable} onClick={() => handleClick(1)}><BsFillCaretUpSquareFill /></button>
        </section>
    )
}
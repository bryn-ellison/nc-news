import { useState } from "react"
import { BsFillCaretDownSquareFill, BsFillCaretUpSquareFill } from "react-icons/bs"

export const Voting = ({ votes, article_id }) => {

    const [votesCount, setVotesCount] = useState(votes)

    const handleClick = (voteClick) => {
        setVotesCount((currentVotes) => currentVotes + voteClick)
    }

    return (
        <div className="voting-module">
        <p>Votes: {votesCount}</p>
        <button onClick={() => handleClick(-1)}><BsFillCaretDownSquareFill /></button>
        <button onClick={() => handleClick(1)}><BsFillCaretUpSquareFill /></button>
        </div>
    )
}
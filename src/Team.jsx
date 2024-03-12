import { useState } from "react"

export default function Team (){

    const [team, setTeam] = useState(11)

    const handleAdd = () =>{
        const newPlayer = team + 1;
        setTeam(newPlayer)
    }

    const handleReduce = () =>{
        const reducePlayer = team - 1;
        setTeam(reducePlayer)
    }

    const teamStyle = {
        margin:'15px',
        padding: '15px',
        borderRadius: '5px',
        border: '2px solid tomato'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handleAdd}>Add-Player</button>
            <button onClick={handleReduce}>Reduce-player</button>
        </div>
    )
}
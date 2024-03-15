import { useState } from "react"

export default function Team() {
    const [team, setCount] = useState(11)
    const handleAdd = () => {
        const addPlayer = team + 1
        setCount(addPlayer)
    }

    const handleRemove = () => {
        setCount(team - 1)
    }

    const teamStyle = {
        border:'2px solid blue',
        borderRadius: '10px',
        margin: '10px'
    }

    return (
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}
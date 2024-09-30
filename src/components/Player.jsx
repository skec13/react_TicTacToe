import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {

    ////////////// save input state ////////////////
    const [playerName, setPlayerName] = useState(initialName);

    function handleChange(event) {
        setPlayerName(event.target.value);   //two-way binding
    }
    ////////////////////////////////////////////////

    /////////////// edit button state //////////////////
    const [ isEditing, setIsEditing] = useState(false);

    function handleEditClick(e) {
        setIsEditing((editing) => !editing);   //toggling between true and false
    }
    ////////////////////////////////////////////////////

    //// change the UI when edit button is clicked ////
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
    ///////////////////////////////////////////////////

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

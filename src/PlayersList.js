import Player from "./Player";
import Players from "./Players";

//PlayersList

const PlayersList = () =>{
    return(
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
        {
            Players.map(player=>(
            <Player key={player.id} {...player} />
            ))
        }
        </div>
        </>
    )
}

export default PlayersList;
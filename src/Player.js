import { Card } from "react-bootstrap";

//Player

//destructuration, on extrait directement les valeurs de props dans les paramètres de la fonction.
const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) =>{
    return(
       <Card  style={{ width: '18rem', margin: '10px'}}>
            <Card.Img variant="top" src={imageURL} alt={name} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
        <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Team: {team}</Card.Text>
                <Card.Text>Nationality: {nationality}</Card.Text>
                <Card.Text>jerseyNumber: {jerseyNumber}</Card.Text>
                <Card.Text>Age: {age}</Card.Text>
        </Card.Body>
       </Card>
    )
}

// Définir des props par défaut
Player.defaultProps = {
    name: "Unknown Player",
    Team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: "Unknown",
    age: "Unknown",
    imageURL: "Unknown url"
};

export default Player;
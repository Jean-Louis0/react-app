import React from 'react';
import Menu from '../Menu';
import image4 from './image4.jpg';
function Accueil(props) {
    return (
        <div>
            <Menu/>
            <h1>Accueil </h1>
            <br/>
            <img src= {image4} alt = "" width={"500"}  height={"300"} />
            <p>
            Here’s to the crazy ones, the misfits, the rebels, 
            the troublemakers, the round pegs in the square holes… 
            the ones who see things differently — they’re not fond of rules… 
            You can quote them, disagree with them, glorify or vilify them, 
            but the only thing you can’t do is ignore them because they change things… 
            they push the human race forward, and while some may see them as the crazy ones, 
            we see genius, because the ones who are crazy enough to think that they can change the world, 
            are the ones who do.
            </p>
        </div>
    );
}

export default Accueil;
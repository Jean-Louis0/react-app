import React from 'react';
import Menu from '../Menu';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
function Galerie(props) {
    return (
        <div>
            <Menu/>
            
            <h1>Galerie</h1>
            
            <div align="center">
            <p>Here is a gallery of different pictures.</p>
            
            </div>
            <br/>
            <img src= {image2} alt = "" width={"500"}  height={"300"} />
            
            <div align="center">
            <p>
                This first image illustrates a narrow, 
                gently sloping strip of land that lies along the edge of a 
                lake located in the heart of Africa.
                the lake (not visible on this pictures) goes by the name of tanganyika.
                the beach is covered with sand, pebbles and rocks, sometimes ypu might also find seashells.
                It is reputable for its breeze of fresh air around the end of the day.
                The beach is located in Bujumbura.
            </p>
            </div>
            <div align="center"><img src= {image3} alt = "" width={"500"}  height={"300"} /></div>

            <div align="center">
            <p>
                Now let's explore the south of a small landlocked country, the heart of Africa.
                Located in Rutana, the image depicts the Chutes de la Karera("Niagara falls of burundi").
                This fall consists of several waterfalls of different sizes intersected with two platforms. 
                Another smaller waterfall is located roughly 50 m to the west of this main fall. 
                Waters of these two falls converge on a second landing to form the third waterfall which pours on the valley.
            </p>
            </div>
        </div>
    );
}

export default Galerie;
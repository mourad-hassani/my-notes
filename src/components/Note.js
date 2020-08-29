import React from 'react';
import { Card, Button, CardBody, CardText, CardHeader, CardFooter, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import COLORS from '../shared/colors';
import IMAGES from '../shared/images';

function Note({ note, addNote }) {
    return (
        <div className={`card p-3 m-2 text-center text-${COLORS[note.color]}`} style={{ backgroundImage: `url(${IMAGES[note.image]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <h2> {note.title} </h2>
            <hr className={`m-3 bg-${COLORS[note.color]}`} />
            <h5> {note.content} </h5>
        </div>
    );
}

export default Note;
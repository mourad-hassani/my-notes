import React from 'react';
import { Card, Button, CardBody, CardText, CardHeader, CardFooter, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import COLORS from '../shared/colors';
import IMAGES from '../shared/images';

function Note({ note, addNote }) {
    return (
        <Card style={{ width: "25vw" }} className="text-center mb-5 text-white">
            <CardHeader className={`bg-${COLORS[note.color]}`}></CardHeader>
            <CardImg src={IMAGES[note.image]} />
            <CardImgOverlay className="mt-3">
                <CardTitle className="h4"> {note.title} </CardTitle>
                <CardText className="h5"> {note.content} </CardText>
            </CardImgOverlay>
        </Card>
    );
}

export default Note;
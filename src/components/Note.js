import React from 'react';
import { Card, Button, CardBody, CardText, CardHeader, CardFooter, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import COLORS from '../shared/colors';
import IMAGES from '../shared/images';

function Note({ note, addNote }) {
    return (
        <Card className="text-center m-3 text-white">
            <CardHeader className={`bg-${COLORS[note.color]}`}></CardHeader>
            <CardImg src={IMAGES[note.image]} />
            <CardImgOverlay className={`p-5 text-${COLORS[note.color]}`}>
                <CardTitle className="h4"> {note.title} </CardTitle>
                <CardText className="h5"> {note.content} </CardText>
            </CardImgOverlay>
        </Card>
    );
}

export default Note;
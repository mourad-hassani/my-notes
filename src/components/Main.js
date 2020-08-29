import React from 'react';
import { Container } from 'reactstrap';
import Notes from './Notes';
import NoteEditor from './NoteEditor';

function Main() {
    return (
        <Container>
            <div style={{ height: "10vh" }}></div>
            <Notes />
        </Container>
    );
}

export default Main;
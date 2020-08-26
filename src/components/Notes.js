import React, { useState } from 'react';
import Note from './Note';
import { Form, FormGroup, Label, Input, Button, Col, CardColumns, Card, CardImg } from 'reactstrap';
import { v4 } from 'uuid';
import COLORS from '../shared/colors';
import IMAGES from '../shared/images';

function NoteForm({ addNote, handleChange, currentNote }) {
    return (
        <Form onSubmit={e => { e.preventDefault(); addNote(); }}>
            <FormGroup>
                <Label for="title-input">Title</Label>
                <Input type="text" name="title" id="title-input" placeholder="Buy Groceries ⏳" value={currentNote.title} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="color-input">Select Color</Label>
                <Input type="select" name="color" id="color-input" onChange={handleChange}>
                    <option value="0" className="bg-primary text-white">blue</option>
                    <option value="1" className="bg-secondary text-white">gray</option>
                    <option value="2" className="bg-success text-white">green</option>
                    <option value="3" className="bg-danger text-white">red</option>
                    <option value="4" className="bg-warning text-white">yellow</option>
                    <option value="5" className="bg-info text-white">info</option>
                    <option value="7" className="bg-dark text-white">dark</option>
                </Input>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="radio" name="image" value={0} onChange={handleChange} />
                    <img style={{ height: "50px", width: "50px" }} src={IMAGES[0]} />
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="radio" name="image" value={1} onChange={handleChange} />
                    <img style={{ height: "50px", width: "50px" }} src={IMAGES[1]} />
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="radio" name="image" value={2} onChange={handleChange} />
                    <img style={{ height: "50px", width: "50px" }} src={IMAGES[2]} />
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="radio" name="image" value={3} onChange={handleChange} />
                    <img style={{ height: "50px", width: "50px" }} src={IMAGES[3]} />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label for="content-input">Note</Label>
                <Input type="textarea" rows="5" name="content" id="content-input" placeholder="
                        5- 3 Eggs
                        6- 1L Milk" value={currentNote.content} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Col xs={{ size: 2, offset: 5 }}>
                    <Button type="submit" block className="bg-success">Add</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

function Notes() {
    const [notes, setNotes] = useState([
        { id: v4(), title: "first note", content: "this is a note", color: 1, image: 2 }
    ]);

    const [currentNote, setCurrentNote] = useState({});

    const addNote = () => {
        const note = { id: v4(), title: currentNote.title, content: currentNote.content, color: currentNote.color, image: currentNote.image };
        setNotes([...notes, note]);
    };

    const handleChange = e => {
        if (e.target.name === "color") setCurrentNote({ ...currentNote, color: parseInt(e.target.value) });
        else if (e.target.name === "image") setCurrentNote({ ...currentNote, image: e.target.value });
        else setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <CardColumns>
                        {notes.map(note => <Note key={note.id} note={note} addNote={addNote} />)}
                    </CardColumns>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <NoteForm addNote={addNote} handleChange={handleChange} currentNote={currentNote} />
                </div>
            </div>
        </>
    );
}

export default Notes;
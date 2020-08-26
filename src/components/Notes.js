import React, { useState } from 'react';
import Note from './Note';
import { Form, FormGroup, Label, Input, Button, Col, Badge } from 'reactstrap';
import { v4 } from 'uuid';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import IMAGES from '../shared/images';

function NoteForm({ addNote, handleChange, currentNote }) {
    return (
        <Form onSubmit={e => { e.preventDefault(); addNote(); }}>
            <FormGroup>
                <Label for="title-input">Title</Label>
                <Input type="text" name="title" id="title-input" placeholder="Buy Groceries ⏳" value={currentNote.title} onChange={handleChange} />
            </FormGroup>
            <fieldset>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="color" value={0} onChange={handleChange} />
                        <Badge className="text-primary" color="primary">hel</Badge>
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="color" value={1} onChange={handleChange} />
                        <Badge className="text-secondary" color="secondary">hel</Badge>
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="color" value={2} onChange={handleChange} />
                        <Badge className="text-success" color="success">hel</Badge>
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="color" value={3} onChange={handleChange} />
                        <Badge className="text-danger" color="danger">hel</Badge>
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="color" value={4} onChange={handleChange} />
                        <Badge className="text-warning" color="warning">hel</Badge>
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="color" value={5} onChange={handleChange} />
                        <Badge className="text-info" color="info">hel</Badge>
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="color" value={7} onChange={handleChange} />
                        <Badge className="text-dark" color="dark">hel</Badge>
                    </Label>
                </FormGroup>
            </fieldset>
            <hr className="m-3" />
            <fieldset>
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
            </fieldset>
            <FormGroup>
                <Label for="content-input">Note</Label>
                <Input type="textarea" rows="5" name="content" id="content-input" value={currentNote.content} onChange={handleChange} />
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
        { id: v4(), title: "first note", content: "this is a note", color: 6, image: 0 }
    ]);

    const [currentNote, setCurrentNote] = useState({ title: "(Empty note)", content: "(Empty)", color: 0, image: 0 });

    const addNote = () => {
        const note = { id: v4(), title: currentNote.title, content: currentNote.content, color: currentNote.color, image: currentNote.image };
        setNotes([...notes, note]);
    };

    const handleChange = e => {
        if (e.target.name === "color") setCurrentNote({ ...currentNote, color: e.target.value });
        else if (e.target.name === "image") setCurrentNote({ ...currentNote, image: e.target.value });
        else setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry>
                            {notes.map(note => <Note key={note.id} note={note} addNote={addNote} />)}
                        </Masonry>
                    </ResponsiveMasonry>
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
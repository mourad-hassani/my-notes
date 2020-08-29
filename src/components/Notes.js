import React, { useState } from 'react';
import Note from './Note';
import NoteEditor from './NoteEditor';
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
        { id: v4(), title: "first note", content: "this is a note", color: 0, image: 0 }
    ]);


    const addNote = () => {
        const note = { id: v4(), title: "(Empty Title)", content: "(Empty Note)", color: 0, image: 0 };
        setNotes([...notes, note]);
    };

    const handleChange = (index, name, text) => {
        const newNotes = notes;
        if (name === "title") {
            newNotes[index].title = text;
            setNotes(newNotes);
        } else if (name === "content") {
            newNotes[index].content = text;
            setNotes(newNotes);
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Masonry>
                        {notes.map((note, index) => <NoteEditor key={note.id} note={note} index={index} handleChange={handleChange} setNotes={setNotes} notes={notes} />)}
                    </Masonry>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button onClick={addNote} className="btn btn-success rounded">new</button>
                </div>
            </div>
        </>
    );
}

export default Notes;
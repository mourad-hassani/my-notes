import React, { useState, useRef } from 'react';
import { Editor, EditorState, ContentState, RichUtils } from 'draft-js';
import COLORS from '../shared/colors';
import IMAGES from '../shared/images';
import '../styles/NoteEditor.css';

function SimpleEditor({ index, placeholder, handleChange, name }) {
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(ContentState.createFromText(placeholder))
    );


    const editor = useRef(null);

    const onChange = editorState => { setEditorState(editorState); handleChange(index, name, editorState.getCurrentContent().getPlainText()); }

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            setEditorState(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    function focusEditor() {
        editor.current.focus();
        if (editorState.getCurrentContent().getPlainText() === "(Empty Title)" || editorState.getCurrentContent().getPlainText() === "(Empty Note)") {
            const newEditorState = EditorState.createWithContent(ContentState.createFromText(""));
            const currentSelection = editorState.getSelection();
            const editorStateWithSelection = EditorState.forceSelection(newEditorState, currentSelection);
            setEditorState(editorStateWithSelection);
        }
    }

    return (
        <div onClick={focusEditor}>
            <Editor
                ref={editor}
                editorState={editorState}
                onChange={onChange}
                handleKeyCommand={handleKeyCommand}
            />
        </div>
    );
}

function NoteEditor({ note, index, defaultTitle, defaultNote, handleChange }) {
    return (
        <div className={`rounded d-inline-block p-3 mb-3 text-${COLORS[note.color]}`} style={{ backgroundImage: `url(${IMAGES[note.image]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="text-center h4">
                {note ? <SimpleEditor name="title" index={index} placeholder={note.title} handleChange={handleChange} /> : <SimpleEditor name="title" placeholder={defaultTitle} handleChange={handleChange} />}
            </div>
            <hr className="mt-1 mb-3" />
            <div className="h6">
                {note ? <SimpleEditor name="title" index={index} placeholder={note.content} handleChange={handleChange} /> : <SimpleEditor name="title" placeholder={defaultNote} handleChange={handleChange} />}
            </div>
        </div>
    );
}

export default NoteEditor;
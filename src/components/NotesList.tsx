import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import TableDraft from "./TableDraft";
import {useDispatch} from "react-redux";
import {NoteActionTypes} from "../store/types/note";
import {EditActionTypes} from "../store/types/edit";

const NotesList: React.FC = () => {

    let {noteHeadings, activeNotes, archivedNotes} = useTypedSelector(state => state.note)
    let {open} = useTypedSelector(state => state.edit)

    const dispatch = useDispatch()
    const deleteNote = (id: number) => {
        activeNotes = activeNotes.filter(note => {
            if (note.id !== id) {
                return note
            }
        })
        dispatch({type: NoteActionTypes.DELETE_NOTE, payload: activeNotes})
    }

    const archiveNote = (id: number) => {
        activeNotes = activeNotes.filter(note => {
            if (note.id !== id) {
                return note
            }
            archivedNotes.push(note)
        })
        dispatch({type: NoteActionTypes.ARCHIVE_NOTE_SET_ISACTIVE, payload: id})
        dispatch({type: NoteActionTypes.ARCHIVE_NOTE_UPDATE_ACTIVE, payload: activeNotes })
        dispatch({type: NoteActionTypes.ARCHIVE_NOTE_UPDATE_ARCHIVED, payload: archivedNotes })
    }

    const editNote = (note: number) => {
        dispatch({type: EditActionTypes.SET_OPEN_TRUE, payload: true})
        dispatch({type: EditActionTypes.SET_NOTE, payload: note})
    }

    return (
        <TableDraft
            headings={noteHeadings}
            body={activeNotes}
            flag={'notes'}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
            editNote={editNote}
        />
    );
};

export default NotesList;
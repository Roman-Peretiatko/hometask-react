import React, {useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import TableDraft from "./TableDraft";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NoteActionTypes} from "../store/types/note";
import {useDispatch} from "react-redux";

const ArchivedNotesList: React.FC = () => {

    const [open, setOpen] = useState(false)

    let {noteHeadings, activeNotes, archivedNotes} = useTypedSelector(state => state.note)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const dispatch = useDispatch()

    const unarchiveNote = (id: number) => {
        archivedNotes = archivedNotes.filter(note => {
            if (note.id !== id) {
                return note
            }
            activeNotes.push(note)
        })
        dispatch({type: NoteActionTypes.ARCHIVE_NOTE_SET_ISACTIVE, payload: id})
        dispatch({type: NoteActionTypes.ARCHIVE_NOTE_UPDATE_ACTIVE, payload: activeNotes })
        dispatch({type: NoteActionTypes.ARCHIVE_NOTE_UPDATE_ARCHIVED, payload: archivedNotes })
    }

    return (
        <Box textAlign="right">
            <Button variant="contained" color="inherit" style={{marginTop: '10px'}} onClick={handleOpen}>Show archived</Button>

            <Dialog open={open} maxWidth="xl">
                <DialogTitle>Archived Notes</DialogTitle>
                <DialogContent>
                    <TableDraft headings={noteHeadings} body={archivedNotes} flag={'notes'} unarchiveNote={unarchiveNote}></TableDraft>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ArchivedNotesList;
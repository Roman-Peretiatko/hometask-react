import React, {useState} from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {useForm} from "react-hook-form";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {EditActionTypes} from "../store/types/edit";
import {NoteActionTypes} from "../store/types/note";

const EditNoteForm: React.FC = () => {

    const {open, note} = useTypedSelector(state => state.edit)

    interface EditNoteInputs {
        noteName: string,
        category: number,
        content: string
    }
    const { register, handleSubmit } = useForm<EditNoteInputs>()

    const getAllDates = (content: string) => {
        if (content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g) === null) {
            return ''
        } else {
            return content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g)
        }
    }

    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch({type: EditActionTypes.SET_OPEN_FALSE, payload: false})
    }
    const handleConfirm = (data: EditNoteInputs) => {
        const noteToEdit = {
            id: note.id,
            noteName: data.noteName,
            creationDate: note.creationDate,
            category: data.category,
            content: data.content,
            dates: getAllDates(data.content)
        }

        dispatch({type: NoteActionTypes.SUBMIT_EDITING, payload: noteToEdit})
        dispatch({type: EditActionTypes.SET_OPEN_FALSE, payload: false})
    }

    return (
            <Box>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit note</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="edit-note-name"
                            label="Note name"
                            type="text"
                            fullWidth
                            defaultValue={note.noteName}
                            {...register('noteName', {required: true})}

                        />
                        <Select
                            margin="dense"
                            id="category-select"
                            fullWidth
                            defaultValue={note.category}

                            {...register('category', {required: true})}
                        >
                            <MenuItem value={999} disabled>Choose a category</MenuItem>
                            <MenuItem value={0}>Task</MenuItem>
                            <MenuItem value={1}>Random Thought</MenuItem>
                            <MenuItem value={2}>Idea</MenuItem>
                        </Select>

                        <TextField
                            margin="dense"
                            id="edit-note-content"
                            label="Note content"
                            type="text"
                            fullWidth
                            defaultValue={note.content}
                            {...register('content')}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit(handleConfirm)}>Submit</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </Box>
    );
};

export default EditNoteForm;
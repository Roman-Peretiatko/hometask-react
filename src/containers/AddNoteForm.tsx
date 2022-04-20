import React, {useState} from 'react';
import {
    Box,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {useDispatch} from "react-redux";
import {NoteActionTypes} from "../store/types/note";
import {SubmitHandler, useForm} from "react-hook-form";

const AddNoteForm = () => {


    const [open, setOpen] = useState<boolean>(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    interface NewNoteInputs {
        noteName: string
        category: number
        content: string
    }

    const { register, handleSubmit, reset } = useForm<NewNoteInputs>()

    const dispatch = useDispatch()
    const createNote: SubmitHandler<NewNoteInputs> = (data) => {
        const getAllDates = (content: string) => {
            if (content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g) === null) {
                return ''
            } else {
                return content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g)
            }
        }

        const newNote = {
            id: Date.now(),
            isActive: true,
            noteName: data.noteName,
            creationDate: new Date().toLocaleDateString().replace(/\./g, '/'),
            category: data.category,
            content: data.content,
            dates: getAllDates(data.content)
        }
        dispatch({type: NoteActionTypes.CREATE_NOTE, payload: newNote })
        reset({noteName: '', category: 999, content: ''})
        setOpen(false)
    }

    return (
        <Box textAlign="right" mt={3}>
            <Button color="primary" variant="contained"  onClick={handleClickOpen}  >Add Note</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a new note</DialogTitle>
                <DialogContent >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="note-name"
                        label="Note name"
                        type="text"
                        fullWidth
                        {...register('noteName', {required: true})}
                    />
                    <Select
                        margin="dense"
                        id="category-select"
                        fullWidth
                        defaultValue={999}
                        {...register('category', {required: true})}
                    >
                        <MenuItem value={999} disabled >Choose a category</MenuItem>
                        <MenuItem value={0}>Task</MenuItem>
                        <MenuItem value={1}>Random Thought</MenuItem>
                        <MenuItem value={2}>Idea</MenuItem>
                    </Select>

                    <TextField
                        margin="dense"
                        id="note-content"
                        label="Note content"
                        type="text"
                        fullWidth
                        {...register('content')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" type="submit" onClick={handleSubmit(createNote)}>Create</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AddNoteForm;
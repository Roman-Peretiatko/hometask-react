import React from 'react';
import {Box, Button, Container} from "@mui/material";
import './App.css';
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";
import EditNoteForm from "./components/EditNoteForm";
import {useTypedSelector} from "./hooks/useTypedSelector";


function App() {

    return (
        <Container className="App">
            <NotesList/>

            <Box textAlign="right" mt={3}>
                <Button variant="contained" color="inherit" style={{marginRight: '15px'}} >Show archived</Button>
                <AddNoteForm/>
            </Box>
            <EditNoteForm />

        </Container>
    );
}

export default App;

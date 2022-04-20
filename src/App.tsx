import React from 'react';
import {Box, Button, Container} from "@mui/material";
import './App.css';
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";
import EditNoteForm from "./components/EditNoteForm";
import ArchivedNotesList from "./components/ArchivedNotesList";
import CategoiesStatsList from "./components/CategoiesStatsList";


function App() {

    return (
        <Container className="App">
            <NotesList/>


            <AddNoteForm/>
            <EditNoteForm/>
            <ArchivedNotesList />

            <CategoiesStatsList />
        </Container>
    );
}

export default App;

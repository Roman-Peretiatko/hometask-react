import React from 'react';
import {Container} from "@mui/material";
import './styles/App.css';
import AddNoteForm from "./containers/AddNoteForm";
import NotesList from "./containers/NotesList";
import EditNoteForm from "./containers/EditNoteForm";
import ArchivedNotesList from "./containers/ArchivedNotesList";
import CategoriesStatsList from "./components/CategoiesStatsList";


function App() {

    return (
        <Container className="App">
            <NotesList/>


            <AddNoteForm/>
            <EditNoteForm/>
            <ArchivedNotesList />

            <CategoriesStatsList />
        </Container>
    );
}

export default App;

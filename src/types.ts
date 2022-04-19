export type NoteType = {
    id?: number,
    noteName?: string,
    content?: string
}

export type NotesListProps = {
    notes: NoteType[]
}

export type AddNoteProps = {
    addNote(newNote: NoteType): void
}
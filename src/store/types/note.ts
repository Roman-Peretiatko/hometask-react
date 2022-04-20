

export enum NoteActionTypes {
    CREATE_NOTE = 'CREATE_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    ARCHIVE_NOTE_UPDATE_ACTIVE = 'ARCHIVE_NOTE_UPDATE_ACTIVE',
    ARCHIVE_NOTE_UPDATE_ARCHIVED = 'ARCHIVE_NOTE_UPDATE_ARCHIVED',
    ARCHIVE_NOTE_SET_ISACTIVE = 'ARCHIVE_NOTE_SET_IS_ACTIVE',
    SUBMIT_EDITING = 'SUBMIT_EDITING'
}

export interface CreateNoteAction {
    type: NoteActionTypes.CREATE_NOTE
    payload: object[]
}

export interface DeleteNoteAction {
    type: NoteActionTypes.DELETE_NOTE
    payload: object[]
}

export interface ArchiveNoteUpdateActiveAction {
    type: NoteActionTypes.ARCHIVE_NOTE_UPDATE_ACTIVE
    payload: object[]
}
export interface ArchiveNoteUpdateArchivedAction {
    type: NoteActionTypes.ARCHIVE_NOTE_UPDATE_ARCHIVED
    payload: object[]
}

export interface ArchiveNoteSetIsActiveAction {
    type: NoteActionTypes.ARCHIVE_NOTE_SET_ISACTIVE,
    payload: number
}

export interface SubmitEditing {
    type: NoteActionTypes.SUBMIT_EDITING
    payload: any
}

export type NoteAction =
    CreateNoteAction
    | DeleteNoteAction
    | ArchiveNoteUpdateActiveAction
    | ArchiveNoteUpdateArchivedAction
    | ArchiveNoteSetIsActiveAction
    | SubmitEditing



export interface NoteState {
    noteHeadings?: string[]
    activeNotes: any[]
    archivedNotes: any[]
    categoriesList: string[]
    activeNotesAmount: number[]
    archivedNotesAmount: number[]
}


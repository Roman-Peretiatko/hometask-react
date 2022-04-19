import {NoteAction, NoteActionTypes, NoteState} from "../types/note";

const getAllDates = (content: string) => {
    if (content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g) === null) {
        return ''
    } else {
        return content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g)
    }
}

const initialState: NoteState = {
    noteHeadings: ['Name', 'Creation Date', 'Category', 'Content', 'Dates', 'Buttons'],

    activeNotes: [{id: 1, noteName: 'qwe', creationDate: '12', category: 2, content: '22/12/2020', dates: ''},
            {id: 2, noteName: 'qwasdasde', creationDate: '12/1/1', category: 0, content: 'asd', dates: ''},],

    archivedNotes: [],

    categoriesList: ['Task', 'Random Thought', 'Idea'],

    activeNotesAmount: [0, 0, 0],

    archivedNotesAmount: [0, 0, 0]
}

let allContent = [...initialState.activeNotes.map(note => note.content)]
for (const note of initialState.activeNotes) {
    const allDates = getAllDates(note.content)
    note.dates = allDates
}

const getActiveAmount = (categoryIndex: number): number => {
    const active = initialState.activeNotes.filter(note => {
        if (note.category === initialState.categoriesList[categoryIndex]) return note
    }).length
    return active
}
const getArchivedAmount = (categoryIndex: number): number => {
    const archived = initialState.archivedNotes.filter(note => {
        if (note.category === initialState.categoriesList[categoryIndex]) return note
    }).length
    return archived
}

initialState.categoriesList.map((category, index) => {
    initialState.activeNotesAmount[index] = getActiveAmount(index)
})

export const noteReducer = (state = initialState, action: NoteAction): NoteState => {
    switch (action.type) {
        case NoteActionTypes.CREATE_NOTE:
            return {...state, activeNotes: [...state.activeNotes, action.payload]}
        case NoteActionTypes.DELETE_NOTE:
            return {...state, activeNotes: action.payload}
        case NoteActionTypes.ARCHIVE_NOTE_UPDATE_ACTIVE:
            return {...state, activeNotes: action.payload}
        case NoteActionTypes.ARCHIVE_NOTE_UPDATE_ARCHIVED:
            return {...state, archivedNotes: action.payload}
        case NoteActionTypes.SUBMIT_EDITING:
            return {...state, activeNotes: [...state.activeNotes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note
                })]}
        default:
            return state
    }
}
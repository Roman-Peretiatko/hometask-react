export enum EditActionTypes {
    SET_OPEN_TRUE = 'SET_OPEN_TRUE',
    SET_OPEN_FALSE = 'SET_OPEN_FALSE',
    SET_NOTE = 'SET_NOTE',
}

export interface SetOpenTrue {
    type: EditActionTypes.SET_OPEN_TRUE
    payload: boolean
}

export interface SetOpenFalse {
    type: EditActionTypes.SET_OPEN_FALSE
    payload: boolean
}

export interface SetNote {
    type: EditActionTypes.SET_NOTE
    payload: Note
}



export type EditAction = SetOpenTrue | SetOpenFalse | SetNote

interface Note {
    id: number,
    isActive: boolean
    noteName: string,
    creationDate: string,
    category: number,
    content: string,
    dates: string
}
export interface EditState {
    open: boolean,
    note: Note
}
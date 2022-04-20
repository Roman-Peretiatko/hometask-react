import {EditAction, EditActionTypes, EditState} from "../types/edit";

const initialState: EditState = {
    open: false,
    note: {
        id: 0,
        isActive: true,
        noteName: '',
        creationDate: '',
        category: 0,
        content: '',
        dates: ''
    }
}

export const editReducer = (state = initialState, action: EditAction): EditState => {
    switch (action.type) {
        case EditActionTypes.SET_OPEN_TRUE:
            return {...state, open: action.payload}
        case EditActionTypes.SET_OPEN_FALSE:
            return {...state, open: action.payload}
        case EditActionTypes.SET_NOTE:
            return {...state, note: action.payload}
        default:
            return state
    }
}
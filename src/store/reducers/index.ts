import {combineReducers} from "redux";
import {noteReducer} from "./noteReducer";
import {editReducer} from "./editReducer";



export const rootReducer = combineReducers({
    note: noteReducer,
    edit: editReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export enum CategoryActionTypes {

}

export type CategoryAction = any

export interface CategoryState {
    categoriesList: string[]
    activeNotesAmount: number[]
    archivedNotesAmount: number[]
}
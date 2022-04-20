import React from 'react';
import TableDraft from "./TableDraft";
import {useTypedSelector} from "../hooks/useTypedSelector";

const CategoiesStatsList: React.FC = () => {

    let {categoriesList, activeNotes, archivedNotes} = useTypedSelector(state => state.note)

    const getActiveAmount = (categoryIndex: number): number => {
        const active = activeNotes.filter(note => {
            if (note.category === categoryIndex) return note
        }).length
        return active
    }
    const getArchivedAmount = (categoryIndex: number): number => {
        const archived = archivedNotes.filter(note => {
            if (note.category === categoryIndex) return note
        }).length
        return archived
    }

    const categoriesBody = [...categoriesList.map((category, index) => {
        return {categoryName: category, active: getActiveAmount(index), archived: getArchivedAmount(index)}
    })]

    return (
        <TableDraft headings={['Name', 'Active', 'Archived']} body={categoriesBody} flag={'categories'}/>
    );
};

export default CategoiesStatsList;
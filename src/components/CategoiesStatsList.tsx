import React from 'react';
import TableDraft from "./TableDraft";
import {useTypedSelector} from "../hooks/useTypedSelector";

const CategoriesStatsList: React.FC = () => {

    let {categoriesList, activeNotes, archivedNotes} = useTypedSelector(state => state.note)

    const getActiveAmount = (categoryIndex: number): number => {
        return activeNotes.filter(note => note.category === categoryIndex).length
    }

    const getArchivedAmount = (categoryIndex: number): number => {
        return archivedNotes.filter(note => note.category === categoryIndex).length
    }

    const categoriesBody = [...categoriesList.map((category, index) => {
        return {categoryName: category, active: getActiveAmount(index), archived: getArchivedAmount(index)}
    })]

    return (
        <TableDraft headings={['Name', 'Active', 'Archived']} body={categoriesBody} flag={'categories'}/>
    );
};

export default CategoriesStatsList;
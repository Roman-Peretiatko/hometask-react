import React from 'react';
import {IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {ArchiveRounded, DeleteRounded, EditRounded} from "@mui/icons-material";
import "./TableDraft.css";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface TableDraftProps {
    headings: string[] | undefined
    body: any[]
    flag: string
    deleteNote?: (id: number) => void
    archiveNote?: (id: number) => void
    editNote?: (id: object) => void
}

const TableDraft: React.FC<TableDraftProps> = ({
                                                   headings,
                                                   body,
                                                   flag,
                                                   deleteNote,
                                                   archiveNote,
                                                   editNote
                                               }) => {

    const headingRowStyles = {
        backgroundColor: '#999999',

    }
    const headingCellStyles = {
        color: '#fefefe',
        fontWeight: 'bold',
    }
    const bodyStyles = {
        marginBottom: '10px',
        background: '#e8eaf5',
        borderRadius: '1px',
    }

    const tableStyles = {
        borderCollapse: 'separate',
        borderSpacing: '0px 10px',
    }

    const {categoriesList} = useTypedSelector(state => state.note)

    return (
        <TableContainer style={{marginTop: '20px'}}>
            <Table sx={tableStyles}>
                {(flag === 'notes') ? <colgroup>
                        <col width="15%"/>
                        <col width="15%"/>
                        <col width="15%"/>
                        <col width="15%"/>
                        <col width="15%"/>
                        <col width="15%"/>
                    </colgroup>
                    :
                    <colgroup>
                        <col width="30%"/>
                        <col width="30%"/>
                        <col width="30%"/>
                    </colgroup>
                }
                <TableHead>
                    <TableRow style={headingRowStyles}>
                        {headings?.map((heading, index) => {
                            return (
                                <TableCell key={index} style={headingCellStyles}>{heading}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {body.map(bodyItem => {
                        return (
                            <TableRow style={bodyStyles}>
                                {Object.keys(bodyItem).map(key => {
                                    if (key === 'category') {
                                        return (
                                            <TableCell style={{
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",

                                            }}>{categoriesList[bodyItem[key]]}</TableCell>
                                        )
                                    }
                                    if (key !== 'id') {
                                        return (
                                            <TableCell style={{
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",

                                            }}>{bodyItem[key]}</TableCell>
                                        )
                                    }
                                })}
                                {bodyItem?.id ? <TableCell style={{padding: 0}}>
                                    <IconButton onClick={() => editNote?.(bodyItem)}>
                                        <EditRounded></EditRounded>
                                    </IconButton>
                                    <IconButton onClick={() => archiveNote?.(bodyItem.id)}>
                                        <ArchiveRounded></ArchiveRounded>
                                    </IconButton>
                                    <IconButton onClick={() => deleteNote?.(bodyItem.id)}>
                                        <DeleteRounded></DeleteRounded>
                                    </IconButton>
                                </TableCell> : ''}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default TableDraft;
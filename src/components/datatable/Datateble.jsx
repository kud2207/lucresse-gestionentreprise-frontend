import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './data';



const paginationModel = { page: 0, pageSize: 8 };
const Datateble = () => {
    const actionColum =[
        {
            field: "action",
            headerName:"Action",
            width: 200,
            renderCell: ()=>{
                return(
                    <div className='cellAction'>
                        <span className='viewButton'>View</span>
                        <span className='deleteutton'>Delete</span>
                    </div>
                )
            }
        }
    ]

    return (
        <div className='datatable'>
                <DataGrid
                    rows={rows}
                    columns={columns.concat( actionColum)}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
        </div>
    )
}

export default Datateble
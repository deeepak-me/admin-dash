import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumn,userRows } from "../../datatablesource";



const Datatable = () => {

  const actionColumn=[
    {field:"action",headerName:"Action",width:200,
      renderCell:()=>{
        return(
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className="dataTable">
        <DataGrid
            rows={userRows}
            columns={userColumn.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
      />
    </div>
  )
}

export default Datatable
import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box } from "@mui/material";

type Props = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

const DataTable: React.FC = ({ rows, columns }: Props) => {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 2,
        padding: 4,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick // Disable row selection by clicking on the row
        checkboxSelection={false} // Disable checkbox selection
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default DataTable;

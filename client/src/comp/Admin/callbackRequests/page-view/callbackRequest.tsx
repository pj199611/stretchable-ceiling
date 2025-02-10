"use client";
import { useState, useEffect } from "react";
import {
  GridColDef,
  GridRowsProp,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { Box, Typography, Button, Card } from "@mui/material";

import PageWrapper from "@/comp/pageWrapper";
import AdminLayout from "@/comp/AdminLayout";
import { getAdminCallbackRequests } from "@/services/authApi";
import DataTable from "@/comp/DataTable";

export default function CallbackRequestPageView() {
  const [callbackList, setCallBackList] = useState([]);

  useEffect(() => {
    getAdminCallbackRequests().then((res) => {
      setCallBackList(res);
    });
  }, []);

  const handleEdit = (id: number) => {
    alert(`Edit action triggered for row with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Delete action triggered for row with id: ${id}`);
  };

  // Define columns with flex properties for auto-resizing
  const columns = [
    { field: "id", headerName: "S.No.", flex: 0.1, disableColumnMenu: true },
    { field: "name", headerName: "Name", flex: 0.2, disableColumnMenu: true },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.2,
      disableColumnMenu: true,
    },
    { field: "mail", headerName: "Mail", flex: 0.2, disableColumnMenu: true },
    {
      field: "comment",
      headerName: "Remark",
      flex: 0.3,
      disableColumnMenu: true,
    },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   type: "actions",
    //   width: 150,
    //   getActions: (params) => [
    //     <GridActionsCellItem
    //       key="edit"
    //       icon={<Button>Edit</Button>}
    //       label="Edit"
    //       onClick={() => handleEdit(params.row._id as number)}
    //     />,
    //     <GridActionsCellItem
    //       key="delete"
    //       icon={<Button color="error">Delete</Button>}
    //       label="Delete"
    //       onClick={() => handleDelete(params.row._id as number)}
    //     />,
    //   ],
    // },
  ];

  //   // Define rows with type GridRowsProp
  const rows: GridRowsProp = callbackList?.map((val, i) => ({
    id: i + 1,
    _id: val._id,
    name: val.name,
    phoneNumber: val.phoneNumber,
    mail: val.mail,
  }));

  return (
    <AdminLayout>
      <PageWrapper title="CallBack Requests">
        <Card>
          <DataTable rows={rows} columns={columns} />
        </Card>
      </PageWrapper>
    </AdminLayout>
  );
}

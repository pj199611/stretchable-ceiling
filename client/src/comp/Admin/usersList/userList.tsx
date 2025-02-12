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
import { getAdminUserList } from "@/services/authApi";
import DataTable from "@/comp/DataTable";

export default function UsersListPageView() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAdminUserList().then((res) => {
      setUserList(res);
    });
  }, []);

  const handleEdit = (id: number) => {
    alert(`Edit action triggered for row with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Delete action triggered for row with id: ${id}`);
  };

  //  "email": "111@gmail.com",
  // "userName": "111",
  // "phoneNumber": 111,
  // "role": "user",
  // Define columns with flex properties for auto-resizing
  const columns = [
    { field: "id", headerName: "S.No.", flex: 0.1, disableColumnMenu: true },
    {
      field: "userName",
      headerName: "Name",
      flex: 0.2,
      disableColumnMenu: true,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.2,
      disableColumnMenu: true,
    },
    { field: "email", headerName: "Mail", flex: 0.3, disableColumnMenu: true },
    {
      field: "role",
      headerName: "Role",
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
  const rows: GridRowsProp = userList?.map((val, i) => ({
    id: i + 1,
    _id: val._id,
    userName: val.userName,
    phoneNumber: val.phoneNumber,
    email: val.email,
    role: val.role,
  }));

  return (
    <AdminLayout>
      <PageWrapper title="All Users List">
        <Card>
          <DataTable rows={rows} columns={columns} />
        </Card>
      </PageWrapper>
    </AdminLayout>
  );
}

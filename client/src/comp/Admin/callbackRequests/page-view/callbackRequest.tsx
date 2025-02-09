"use client";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

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
  ];

  //   // Define rows with type GridRowsProp
  const rows: GridRowsProp = callbackList?.map((val, i) => ({
    id: i + 1,
    // _id: vaisFinitel._id,
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

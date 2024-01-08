/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import { Alert, AlertTitle } from "@mui/material";
import { useMaterialUIController, setShowAlarm } from "context";

function Tables() {
  const [controller, dispatch] = useMaterialUIController();
  const { showAlarm } = controller;

  const columns = [
    { Header: "index", accessor: "index", width: "10px", align: "left" },
    { Header: "log", accessor: "log", width: "100%", align: "left" },
    { Header: "time", accessor: "time", align: "left" },
  ];

  const rows = [
    {
      index: "1",
      log: "Fire!",
      time: "2024-01-07T16:55:55.961Z",
    },
    {
      index: "2",
      log: "Fire!",
      time: "2024-01-07T16:55:55.961Z",
    },
    {
      index: "3",
      log: "Fire!",
      time: "2024-01-07T16:55:55.961Z",
    },
  ];

  return (
    <DashboardLayout>
      {showAlarm && (
        <Alert variant="filled" severity="warning">
          <AlertTitle>Fire</AlertTitle>
          There were a fire — <strong>check it out!</strong>
        </Alert>
      )}
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Alarm Logs
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;

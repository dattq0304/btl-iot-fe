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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import { Alert, AlertTitle } from "@mui/material";
import { useMaterialUIController, setShowAlarm } from "context";

const getRandomValue = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateFakeData = (numberOfElements) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  const nearbyHours = [];
  for (let i = 0; i < numberOfElements; i++) {
    const hour = currentHour - i;
    const minutes = currentMinutes === 0 ? "00" : "30";

    let formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
    const indexOfDash = formattedHour.indexOf("-");
    if (indexOfDash > -1) {
      formattedHour = formattedHour.substring(indexOfDash + 1);
    }

    const formattedTime = `${formattedHour}:${minutes}`;

    nearbyHours.unshift(formattedTime);
  }

  let currentTemperature = getRandomValue(20, 30);
  const temperatureVariation = 2;
  const randomTemperature = [];
  for (let i = 0; i < numberOfElements; i++) {
    currentTemperature += getRandomValue(-temperatureVariation, temperatureVariation);
    randomTemperature.push(currentTemperature);
  }

  const temperatures = {
    labels: nearbyHours,
    datasets: {
      label: "Temperature",
      data: randomTemperature,
    },
  };

  let currentHumidity = getRandomValue(40, 50);
  const humidityVariation = 6;
  const randomHumidity = [];
  for (let i = 0; i < numberOfElements; i++) {
    currentHumidity += getRandomValue(-humidityVariation, humidityVariation);
    randomHumidity.push(currentHumidity);
  }

  const humidities = {
    labels: nearbyHours,
    datasets: {
      label: "Humidity",
      data: randomHumidity,
    },
  };

  return { temperatures, humidities };
};

function Dashboard() {
  const [controller, dispatch] = useMaterialUIController();
  const { showAlarm } = controller;
  const { temperatures, humidities } = generateFakeData(20);

  return (
    <DashboardLayout>
      {showAlarm && (
        <Alert variant="filled" severity="warning">
          <AlertTitle>Fire</AlertTitle>
          There were a fire — <strong>check it out!</strong>
        </Alert>
      )}
      <DashboardNavbar />
      <MDBox py={3}>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid> */}
        <MDBox mt={4.5}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid> */}
            <Grid item xs={12} md={12} lg={12}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="temperature"
                  // description={
                  //   <>
                  //     (<strong>+15%</strong>) increase in today sales.
                  //   </>
                  // }
                  date="updated 4 min ago"
                  chart={temperatures}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="humidity"
                  // description="Last Campaign Performance"
                  date="just updated"
                  chart={humidities}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;

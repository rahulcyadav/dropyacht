import Box from "@mui/material/Box";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import ReactECharts from "echarts-for-react";
import * as React from "react";
import data from "./data";
import SummaryCard from "./SummaryCard";
import PieChartIcon from "@mui/icons-material/PieChart";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

function Dashboard() {
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(
    dayjs("10/10/2021")
  );
  const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs("12/30/2021"));

  const dataInRange = data.filter(
    (item) => item.date.isAfter(fromDate) && item.date.isBefore(toDate)
  );

  const totalClicks = dataInRange.reduce((acc, item) => acc + item.clicks, 0);
  const totalImpressions = dataInRange.reduce(
    (acc, item) => acc + item.impressions,
    0
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="From"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
          />
          <DatePicker
            label="To"
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <SummaryCard
          label="Total Clicks"
          value={totalClicks}
          icon={<SignalCellularAltIcon />}
        />
        <SummaryCard
          label="Total impressions"
          value={totalImpressions}
          icon={<PieChartIcon />}
        />
      </Box>

      <ReactECharts
        option={{
          title: {
            text: "Product Trends by Month",
          },
          legend: {
            icon: "circle",
            data: ["impressions", "clicks"],
          },

          xAxis: {
            type: "category",
            data: dataInRange.map((item) => item.date.format("M/DD/YYYY")),
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "impressions",
              type: "line",
              data: dataInRange.map((item) => item.impressions),
            },

            {
              name: "clicks",
              type: "line",
              data: dataInRange.map((item) => item.clicks),
            },
          ],
        }}
      />
    </Box>
  );
}

export default Dashboard;

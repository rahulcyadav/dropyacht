import Box from "@mui/material/Box";
import AppNav from "./AppNav";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppNav />
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;

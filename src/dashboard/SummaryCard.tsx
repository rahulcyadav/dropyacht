import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface SummaryCardProps {
  label: string;
  value: number | string;
  icon: any;
}

function SummaryCard({ label, value, icon }: SummaryCardProps) {
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>{icon}</Avatar>
          <Typography>{label}</Typography>
        </Box>
        <Typography variant="h5" component="div">
          {Number(value).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;

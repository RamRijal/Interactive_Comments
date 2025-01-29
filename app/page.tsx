import HomePage from "@/components/Home";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        alignContent: "center",
        justifyContent: "center"
      }}>
      <HomePage />
    </Box>
  );
}

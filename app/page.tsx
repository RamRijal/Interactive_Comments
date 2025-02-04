'use client'
import HomePage from "@/components/Home";
import { Box, useTheme } from "@mui/material";
export default function Home() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
        height:'100%',
        minWidth:'100vh'
      }}>
      <HomePage />
    </Box>
  );
}

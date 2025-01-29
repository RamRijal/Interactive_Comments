import { ThemeOptions, createTheme } from "@mui/material/styles";

// Light Theme Options
export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5", // Primary color for light mode
    },
    secondary: {
      main: "#f50057", // Secondary color for light mode
    },
    background: {
      default: "#ffffff", // Light background
      paper: "#f5f5f5", // Light paper background
    },
    text: {
      primary: "#000000", // Dark text for light mode
      secondary: "#757575", // Secondary text for light mode
    },
  },
  typography: {
    fontFamily: "'Rubik', sans-serif",
    h4: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#324152",
    },
    body1: {
      fontSize: "14px",
      color: "#67727E",
    },
    button: {
      textTransform: "none", // Keep buttons lowercase
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
};

// Dark Theme Options
export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#5457b6", // Primary color for dark mode
    },
    secondary: {
      main: "#ed6468", // Secondary color for dark mode
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Dark paper background
    },
    text: {
      primary: "#ffffff", // Light text for dark mode
      secondary: "#b0b0b0", // Secondary text for dark mode
    },
  },
  typography: {
    fontFamily: "'Rubik', sans-serif",
    h4: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#ffffff", // Light text for dark mode
    },
    body1: {
      fontSize: "14px",
      color: "#b0b0b0", // Light secondary text for dark mode
    },
    button: {
      textTransform: "none", // Keep buttons lowercase
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
};

// Create light and dark themes
export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);

// Default export (light theme as default)
export default lightTheme;

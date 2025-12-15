import React, { createContext, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../theme/themes";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  isDark: false,
});

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setIsDark((prev) => !prev),
      isDark,
    }),
    [isDark]
  );

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

import { ThemeProvider } from "styled-components";
import { SignIn } from "./src/screens";

import theme from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

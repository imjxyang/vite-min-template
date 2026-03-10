import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ThemeShowcase } from "./components/theme-showcase";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ThemeShowcase />
    </MantineProvider>
  );
}

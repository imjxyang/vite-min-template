import { Badge, Group, Stack, Text, Title, useMantineTheme } from "@mantine/core";

export function ThemeHeader() {
  const mantineTheme = useMantineTheme();
  const primaryShade =
    typeof mantineTheme.primaryShade === "number"
      ? mantineTheme.primaryShade
      : mantineTheme.primaryShade.light;

  return (
    <Stack gap="xs">
      <Title order={2}>Mantine Theme Preview</Title>
      <Text c="dimmed">
        Primary color: {mantineTheme.primaryColor}[{String(primaryShade)}], default
        radius: {String(mantineTheme.defaultRadius)}
      </Text>
      <Group gap="xs">
        <Badge variant="light">focus: {mantineTheme.focusRing}</Badge>
        <Badge variant="outline">cursor: {mantineTheme.cursorType}</Badge>
        <Badge variant="dot">auto contrast: {String(mantineTheme.autoContrast)}</Badge>
      </Group>
    </Stack>
  );
}

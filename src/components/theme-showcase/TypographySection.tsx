import { Code, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { SectionCard } from "./SectionCard";

export function TypographySection() {
  const mantineTheme = useMantineTheme();

  return (
    <SectionCard
      title="Typography scale"
      description="Preview heading and text rhythm from theme headings/fontSizes/lineHeights."
    >
      <Stack gap={4}>
        <Title order={3}>Heading level 3</Title>
        <Title order={4}>Heading level 4</Title>
        <Text size="md">
          Body text at <Code>md</Code> size.
        </Text>
        <Text size="sm" c="dimmed">
          Monospace family:
        </Text>
        <Code block>{mantineTheme.fontFamilyMonospace}</Code>
      </Stack>
    </SectionCard>
  );
}

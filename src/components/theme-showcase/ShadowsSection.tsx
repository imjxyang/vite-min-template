import { Group, Paper, Stack, Text, useMantineTheme } from "@mantine/core";
import { SectionCard } from "./SectionCard";

const shadowKeys = ["xs", "sm", "md", "lg", "xl"] as const;

export function ShadowsSection() {
  const mantineTheme = useMantineTheme();

  return (
    <SectionCard title="Shadow tokens">
      <Group grow align="stretch">
        {shadowKeys.map((key) => (
          <Paper key={key} p="sm" radius="md" withBorder shadow={key}>
            <Stack gap={2}>
              <Text size="sm" fw={500}>
                {key}
              </Text>
              <Text size="xs" c="dimmed" lineClamp={2}>
                {mantineTheme.shadows[key]}
              </Text>
            </Stack>
          </Paper>
        ))}
      </Group>
    </SectionCard>
  );
}

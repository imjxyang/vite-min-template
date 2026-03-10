import { Group, Paper, Text } from "@mantine/core";
import { SectionCard } from "./SectionCard";

const radiusKeys = ["xs", "sm", "md", "lg", "xl"] as const;

export function RadiusSection() {
  return (
    <SectionCard title="Radius tokens">
      <Group>
        {radiusKeys.map((key) => (
          <Paper key={key} p="sm" radius={key} withBorder>
            <Text size="sm">{key}</Text>
          </Paper>
        ))}
      </Group>
    </SectionCard>
  );
}

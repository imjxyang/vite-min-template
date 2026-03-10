import { Badge, Button, Group, useMantineTheme } from "@mantine/core";
import { SectionCard } from "./SectionCard";

const spacingKeys = ["xs", "sm", "md", "lg", "xl"] as const;

export function SpacingSection() {
  const mantineTheme = useMantineTheme();

  return (
    <SectionCard title="Spacing tokens">
      {spacingKeys.map((key) => (
        <Group key={key} gap={key}>
          <Badge variant="outline">{key}</Badge>
          <Button size="xs">Gap demo</Button>
          <Button size="xs" variant="light">
            {mantineTheme.spacing[key]}
          </Button>
        </Group>
      ))}
    </SectionCard>
  );
}

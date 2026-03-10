import { Paper, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <Paper p="lg" radius="lg" withBorder>
      <Stack gap="sm">
        <Text fw={600}>{title}</Text>
        {description ? (
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        ) : null}
        {children}
      </Stack>
    </Paper>
  );
}

import {
  Badge,
  Button,
  Group,
  Progress,
  SimpleGrid,
  Stack,
  Switch,
  TextInput,
} from "@mantine/core";
import { SectionCard } from "./SectionCard";

export function ComponentDefaultsSection() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      <SectionCard
        title="Button + Card defaults"
        description="Buttons and surfaces should reflect the shared radius and shadow setup."
      >
        <Group>
          <Button>Primary</Button>
          <Button variant="light">Light</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="gradient">Gradient</Button>
        </Group>
        <Group>
          <Badge color="brand" variant="light">
            brand badge
          </Badge>
          <Button color="brand.1">Auto contrast sample</Button>
          <Button color="brand.2">Auto contrast sample</Button>
          <Button color="brand.9">Auto contrast sample</Button>
        </Group>
      </SectionCard>

      <SectionCard
        title="Form controls"
        description="Inputs, switches, and progress bars using your brand and default radius."
      >
        <Stack gap="sm">
          <TextInput
            label="Project name"
            withAsterisk
            placeholder="Theme smoke test"
          />
          <Switch
            defaultChecked
            label="Switch should use brand as checked color"
          />
          <Progress value={72} color="brand" />
        </Stack>
      </SectionCard>
    </SimpleGrid>
  );
}

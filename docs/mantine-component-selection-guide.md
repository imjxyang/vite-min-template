# Mantine Component Selection Guide

This guide is based on the components currently used in this repo, with focus on practical selection rules and small examples.

## Quick Decision Table

| If you need... | Prefer | Why |
|---|---|---|
| Vertical layout with consistent spacing | `Stack` | Simple column flow with `gap` |
| Horizontal layout for small items (buttons/tags) | `Group` | Row layout with built-in wrapping and spacing |
| Responsive multi-column layout | `SimpleGrid` | Clean `cols` per breakpoint |
| A basic surface (border, radius, shadow) | `Paper` | Lightweight container, no card semantics |
| A content block with card semantics | `Card` | Better when you want card-specific structure/actions |
| A centered page area with max width | `Container` | Keeps content readable on large screens |

## Layout Components

### `Stack`

Use when children should flow top-to-bottom with a predictable gap.

```tsx
import { Stack, TextInput, Button } from "@mantine/core";

function FormColumn() {
  return (
    <Stack gap="sm">
      <TextInput label="Email" />
      <TextInput label="Password" type="password" />
      <Button>Sign in</Button>
    </Stack>
  );
}
```

### `Group`

Use when children should be on one row (actions, badges, small controls).

```tsx
import { Group, Button, Badge } from "@mantine/core";

function Actions() {
  return (
    <Group gap="xs">
      <Button size="xs">Save</Button>
      <Button size="xs" variant="light">
        Cancel
      </Button>
      <Badge variant="outline">Draft</Badge>
    </Group>
  );
}
```

### `SimpleGrid`

Use when you need responsive columns with equal-width tracks.

```tsx
import { SimpleGrid, Paper, Text } from "@mantine/core";

function TwoColumnStats() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      <Paper p="md" withBorder>
        <Text>Left panel</Text>
      </Paper>
      <Paper p="md" withBorder>
        <Text>Right panel</Text>
      </Paper>
    </SimpleGrid>
  );
}
```

### `Container`

Use at page level to center and constrain width.

```tsx
import { Container, Text } from "@mantine/core";

function Page() {
  return (
    <Container size="md" py="xl">
      <Text>Page content</Text>
    </Container>
  );
}
```

## Surface Components

### `Paper`

Use as a generic visual surface.

```tsx
import { Paper, Text } from "@mantine/core";

function Panel() {
  return (
    <Paper p="lg" radius="lg" withBorder shadow="sm">
      <Text>Reusable panel</Text>
    </Paper>
  );
}
```

### `Card`

Use when the content is conceptually a card (item preview, summary, action tile).

```tsx
import { Card, Text, Button, Stack } from "@mantine/core";

function ProductCard() {
  return (
    <Card withBorder shadow="sm" radius="lg">
      <Stack gap="sm">
        <Text fw={600}>Starter Plan</Text>
        <Text size="sm" c="dimmed">
          Basic features for small teams
        </Text>
        <Button>Choose plan</Button>
      </Stack>
    </Card>
  );
}
```

## Content and Input Components

### `Text` and `Title`

Use `Title` for hierarchy, `Text` for body and helper content.

```tsx
import { Title, Text, Stack } from "@mantine/core";

function HeadingBlock() {
  return (
    <Stack gap={4}>
      <Title order={3}>Project Overview</Title>
      <Text c="dimmed">Updated 5 minutes ago</Text>
    </Stack>
  );
}
```

### `Button`, `Badge`

Use `Button` for actions, `Badge` for status/category.

```tsx
import { Group, Button, Badge } from "@mantine/core";

function StatusActions() {
  return (
    <Group>
      <Button>Deploy</Button>
      <Badge color="green" variant="light">
        healthy
      </Badge>
    </Group>
  );
}
```

### `TextInput`, `Switch`, `Progress`

Typical form and state indicators.

```tsx
import { Stack, TextInput, Switch, Progress } from "@mantine/core";

function SettingsPanel() {
  return (
    <Stack gap="sm">
      <TextInput label="Project name" placeholder="my-app" />
      <Switch label="Enable feature flag" defaultChecked />
      <Progress value={72} />
    </Stack>
  );
}
```

### `ColorSwatch`, `Code`

Use `ColorSwatch` for palette preview, `Code` for inline/token snippets.

```tsx
import { Group, ColorSwatch, Code } from "@mantine/core";

function ThemeSnippet() {
  return (
    <Group>
      <ColorSwatch color="#4c69e6" />
      <Code>theme.colors.brand[6]</Code>
    </Group>
  );
}
```

## Theme-Aware Selection Tips

1. Use token props (`gap="md"`, `radius="lg"`, `shadow="sm"`) instead of hardcoded pixel values.
2. Keep layout responsibilities separate:
   - `Stack`/`Group`/`SimpleGrid` for structure
   - `Paper`/`Card` for visual surfaces
3. Read theme values with `useMantineTheme()` only when runtime access is needed (for loops, previews, dynamic text).

```tsx
import { useMantineTheme, Group, Badge } from "@mantine/core";

function SpacingPreview() {
  const theme = useMantineTheme();

  return (
    <Group gap="sm">
      <Badge>sm = {theme.spacing.sm}</Badge>
      <Badge>lg = {theme.spacing.lg}</Badge>
    </Group>
  );
}
```

## Practical Patterns for This Repo

1. Page scaffold: `Container` + top-level `Stack`.
2. Section block: `Paper` wrapper + inner `Stack`.
3. Side-by-side sections: `SimpleGrid`.
4. Inline actions and labels: `Group`.

Following these patterns keeps UI consistent with the shared Mantine theme in `src/theme.ts`.

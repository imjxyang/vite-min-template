import { ColorSwatch, Group, Text, useMantineTheme } from "@mantine/core";
import { SectionCard } from "./SectionCard";

export function BrandPaletteSection() {
  const mantineTheme = useMantineTheme();

  return (
    <SectionCard title="Brand color shades">
      <Group gap="xs">
        {mantineTheme.colors.brand.map((shade, index) => (
          <ColorSwatch key={shade} color={shade}>
            <Text size="10px" c={index >= 6 ? "white" : "black"}>
              {index}
            </Text>
          </ColorSwatch>
        ))}
      </Group>
    </SectionCard>
  );
}

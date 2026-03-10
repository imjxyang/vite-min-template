import { Container, Stack } from "@mantine/core";
import { BrandPaletteSection } from "./BrandPaletteSection";
import { ComponentDefaultsSection } from "./ComponentDefaultsSection";
import { RadiusSection } from "./RadiusSection";
import { ShadowsSection } from "./ShadowsSection";
import { SpacingSection } from "./SpacingSection";
import { ThemeHeader } from "./ThemeHeader";
import { TypographySection } from "./TypographySection";

export function ThemeShowcase() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <ThemeHeader />
        <BrandPaletteSection />
        <ComponentDefaultsSection />
        <TypographySection />
        <SpacingSection />
        <RadiusSection />
        <ShadowsSection />
      </Stack>
    </Container>
  );
}

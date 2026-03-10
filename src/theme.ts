import { createTheme, MantineColorsTuple } from '@mantine/core';

const brand: MantineColorsTuple = [
  '#eef2ff',
  '#dfe7ff',
  '#c0ceff',
  '#9fb3ff',
  '#7f98ff',
  '#5f7cff',
  '#4c69e6',
  '#3b52b4',
  '#2a3b82',
  '#1a2552',
];

export const theme = createTheme({
  colors: {
    brand,
  },

  primaryColor: 'brand',
  primaryShade: { light: 6, dark: 8 },
  autoContrast: true,
  luminanceThreshold: 0.32,
  defaultGradient: { from: 'brand.5', to: 'brand.7', deg: 135 },
  focusRing: 'auto',
  cursorType: 'pointer',
  respectReducedMotion: true,
  defaultRadius: 'md',

  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',

  headings: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    fontWeight: '700',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: '2.25rem', lineHeight: '1.2' },
      h2: { fontSize: '1.875rem', lineHeight: '1.25' },
      h3: { fontSize: '1.5rem', lineHeight: '1.3' },
      h4: { fontSize: '1.25rem', lineHeight: '1.35' },
      h5: { fontSize: '1.125rem', lineHeight: '1.4' },
      h6: { fontSize: '1rem', lineHeight: '1.45' },
    },
  },

  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },

  lineHeights: {
    xs: '1.3',
    sm: '1.4',
    md: '1.5',
    lg: '1.6',
    xl: '1.7',
  },

  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },

  shadows: {
    xs: '0 1px 2px rgba(16, 24, 40, 0.06)',
    sm: '0 2px 8px rgba(16, 24, 40, 0.08)',
    md: '0 4px 14px rgba(16, 24, 40, 0.10)',
    lg: '0 8px 24px rgba(16, 24, 40, 0.14)',
    xl: '0 14px 40px rgba(16, 24, 40, 0.18)',
  },

  other: {
    appShell: {
      headerHeight: 64,
      navbarWidth: 280,
    },
    zIndex: {
      app: 100,
      overlay: 200,
      modal: 300,
    },
  },

  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
        withBorder: true,
      },
    },
    Paper: {
      defaultProps: {
        radius: 'md',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Select: {
      defaultProps: {
        radius: 'md',
      },
    },
    Modal: {
      defaultProps: {
        radius: 'lg',
        overlayProps: {
          blur: 3,
          opacity: 0.55,
        },
      },
    },
    Tooltip: {
      defaultProps: {
        radius: 'sm',
        withArrow: true,
      },
    },
  },
});

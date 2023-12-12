import { createTheme } from '@mantine/core';
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

// Defines the mantine theme
export const theme = createTheme({
  focusRing: 'auto', // Focus ring is only visible on keyboard focus
  scale: 1, // Scaling font size with rem units
  fontSmoothing: true,
  white: '#FFFFFF',
  black: '#000000',
  primaryShade: { light: 6, dark: 8 }, // Default values for color shades
  primaryColor: 'cyan',
  fontFamily: inter.style.fontFamily,
  fontFamilyMonospace: sourceCodePro.style.fontFamily,
});

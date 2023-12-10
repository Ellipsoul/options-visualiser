'use client';

import { MantineColorsTuple, createTheme } from '@mantine/core';

const colorTheme: MantineColorsTuple = [
  '#e1f9ff',
  '#ccedff',
  '#9ad7ff',
  '#64c1ff',
  '#3baefe',
  '#20a2fe',
  '#099cff',
  '#0088e4',
  '#0078cd',
  '#0069b6',
];

export const theme = createTheme({
  colors: {
    colorTheme,
  },
});
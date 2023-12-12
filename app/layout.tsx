import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Metadata } from 'next';
import { NavBar } from './(app)/Navbar/Navbar';
import { theme } from '@/theme';
import { Footer } from './(app)/Footer/Footer';

export const metadata: Metadata = {
  title: 'Options Visualiser',
  description: 'TODO',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <NavBar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}

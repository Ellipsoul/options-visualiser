'use client';

import { Button, Group, Title, useMantineColorScheme } from '@mantine/core';
import classes from './AppPage.module.css';

export default function HomePage() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome
      </Title>
      <Group justify="center" mt="xl">
        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      </Group>
    </>
  );
}

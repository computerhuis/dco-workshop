import {RepairStatusOverview} from "./RepairStatusOverview.jsx";
import {Button, Grid, SimpleGrid, Text, Title} from '@mantine/core';

export function RepairStatus() {
    return (
        <>
            <Grid mb={15}>
                <Grid.Col span={{base: 12, xs: 4}}>
                    <Title order={1}>Reparatie status</Title>
                    <Text c="dimmed">Klik op de reparatie die je wilt inzien of maak een andere keuze</Text>
                </Grid.Col>
                <Grid.Col span={{base: 12, xs: 4}}>
                    <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
                        <Text p={5} c="white" style={{background: 'var(--mantine-color-red-7)'}}>In de wacht</Text>
                        <Text p={5} c="white" style={{background: 'var(--mantine-color-green-7)'}}>In behandeling</Text>
                        <Text p={5} c="white" style={{background: 'var(--mantine-color-blue-7)'}}>Gereed</Text>
                        <Text p={5} c="white" style={{background: 'var(--mantine-color-orange-7)'}}>Klant gebeld</Text>
                        <Text p={5} c="white" style={{background: 'var(--mantine-color-gray-6)'}}>Opgehaald</Text>
                    </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={{base: 12, xs: 2}}>
                    <Button fullWidth ml={5} mb={5}>Invoeren Giften</Button>
                    <Button fullWidth ml={5}>Gekregen Computers</Button>
                </Grid.Col>
                <Grid.Col span={{base: 12, xs: 2}}>
                    <Button fullWidth ml={5} mb={5}>Voorraad computers</Button>
                    <Button fullWidth ml={5}>Overzicht Uitgiftbewijs</Button>
                </Grid.Col>
            </Grid>
            <RepairStatusOverview/>
        </>
    );
}

import {AppShell} from '@mantine/core';
import {Outlet} from "react-router-dom";
import {AppMenu} from "./menu/AppMenu.jsx";

export function AppLayout() {
    return (
        <AppShell padding="md" navbar={{width: 80, breakpoint: 'sm',}}>
            <AppShell.Navbar>
                <AppMenu/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
}

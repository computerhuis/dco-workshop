import {Center, rem, Stack, Tooltip} from '@mantine/core';
import {IconDeviceLaptop, IconGauge, IconGift, IconMouse2, IconUsers,} from '@tabler/icons-react';
import classes from './AppMenu.module.css';
import {NavLink} from "react-router-dom";

const menu = [
    {
        label: 'Dashboard',
        icon: IconGauge,
        link: '/'
    },
    {
        label: 'Computers',
        icon: IconDeviceLaptop,
        initiallyOpened: true,
        link: 'computers'
    },
    {
        label: 'Klanten',
        icon: IconUsers,
        initiallyOpened: true,
        link: 'customers'
    },
    {
        label: 'Giften',
        icon: IconGift,
        initiallyOpened: true,
        link: 'gifts'
    }
];

function NavbarLink({icon: Icon, label, link}) {
    return (
        <Tooltip label={label} position="right" transitionProps={{duration: 0}}>
            <NavLink to={link} className={({isActive}) => isActive ? classes.active : classes.link}>
                <Icon style={{width: rem(20), height: rem(20)}} stroke={1.5}/>
            </NavLink>
        </Tooltip>
    );
}

export function AppMenu() {
    const links = menu.map((link, index) => (
        <NavbarLink    {...link} key={index}/>
    ));

    return (
        <nav className={classes.navbar}>
            <Center>
                <IconMouse2 type="mark" size={48} strokeWidth={2} color={'#840808'}/>
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>
        </nav>
    );
}

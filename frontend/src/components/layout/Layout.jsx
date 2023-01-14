import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

function Layout({children}) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                <NavItem to="/calendar" icon={<CalendarMonthIcon />}>Календарь</NavItem>
                <NavItem to="/review" icon={<RemoveRedEyeIcon />}>Код ревью</NavItem>
                <NavItem to="/lectures">Материалы лекции</NavItem>
                <NavItem to="/chats" icon={<MarkUnreadChatAltIcon />}>Чаты</NavItem>
                <NavItem to="/votes" icon={<ThumbsUpDownIcon />}>Голосования</NavItem>
                <NavItem to="/pairs" icon={<PeopleAltIcon />}>Пары</NavItem>
                <NavItem to="/groups" icon={<GroupsIcon />}>Группы</NavItem>
                <NavItem to="/wiki" icon={<AutoStoriesIcon />}>Вики</NavItem>
            </List>
            <Divider/>
            <List>
                <NavItem to="/profile" icon={<AccountCircleIcon />}>Профиль</NavItem>
                <NavItem to="/logout" icon={<LogoutIcon />}>Выйти</NavItem>
            </List>
        </div>
    );

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        LMS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                {children}
            </Box>
        </Box>
    );
}

const NavItem = ({to, children, icon}) => {
    return (
        <NavLink to={to} style={{textDecoration: 'none', color: 'inherit'}}>
            {({isActive}) => (
                <ListItem disablePadding>
                    <ListItemButton selected={isActive}>
                        <ListItemIcon>
                            {icon || <InboxIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={children}/>
                    </ListItemButton>
                </ListItem>
            )}
        </NavLink>
    )
}

export default Layout;

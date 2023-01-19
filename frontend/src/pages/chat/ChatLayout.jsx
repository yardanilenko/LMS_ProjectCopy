import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Chats from "../../components/chat/Chats"
import Contacts from "../../components/chat/Contacts"
import Search from "../../components/chat/Search"
import Chat from "../../components/chat/Chat";


const drawerWidth = 240;

function ChatLayout() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}, height:`calc(100vh - 120px)`, paddingRight:"24px", borderRight:"1px solid #e0e0e0"}}
                aria-label="mailbox folders"
            >
                <div style={{height:"40px"}}></div>
                <Divider />
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Search />
                <Chats />
                <Divider/>
                <Contacts />
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Chat />
            </Box>
        </Box>
    );
}

export default ChatLayout;

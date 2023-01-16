import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Chats from "../../components/chat/Chats"
import Contacts from "../../components/chat/Contacts"
import Search from "../../components/chat/Search"
import Chat from "../../components/chat/Chat";
import {useState} from "react";


const drawerWidth = 240;

function ChatLayout() {

    const [chatID, setChatID] = useState(null);

    const handleOpenChat = (chatID) => {
        setChatID(chatID);
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                <div style={{height:"40px"}}></div>
                <Divider />
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Search handleOpenChat={handleOpenChat}/>
                <Chats handleOpenChat={handleOpenChat}/>
                <Divider/>
                <Contacts handleOpenChat={handleOpenChat}/>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Chat chatID={chatID}/>
            </Box>
        </Box>
    );
}

export default ChatLayout;

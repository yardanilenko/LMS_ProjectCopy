import React from 'react';
import {useState, useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

function Chats({handleOpenChat}) {

    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetch('/api/groupChats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                return {rooms: []};
            }

        }).then(data => {
            setChats(data.rooms)
        })
    }, []);

    const handleOpenGroupChat = (id, name) => {
        fetch('/api/groupChats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                room_id: id,
                room_name: name,
            })
        }).then((resp) => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                throw new Error('Error');
            }
        }).then((data) => {
            handleOpenChat(data.id);
        })
    }

    return (
        <div>
            <h3>Chats</h3>
            <List sx={{ width: '100%', maxWidth: 360 }}>
            {chats && chats.map((chat) => (
                <ChatItem chat={chat} handleOpenGroupChat={handleOpenGroupChat}/>
            ))}
            </List>
        </div>
    );
}

function ChatItem({chat, handleOpenGroupChat}) {
    return (
        <ListItem key={chat.id}
                  onClick={() => {
            handleOpenGroupChat(chat.id, chat.room_name);
        }}>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={chat.room_name} secondary="Recently" />
        </ListItem>
    );
}


export default Chats;

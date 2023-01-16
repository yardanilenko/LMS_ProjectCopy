import React from 'react';
import{useState, useEffect} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";

function Contacts({handleOpenChat}) {

    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetchChats();
    }, []);

    const fetchChats = () => {
        fetch('/api/chats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => {
                setChats(data.chats)
            })
    }


    return (
        <div>
            <h3>Contacts</h3>
            <List sx={{ width: '100%', maxWidth: 360}}>
                {chats && chats.map((chat) => (
                    <ContactItem chat={chat} handleOpenChat={handleOpenChat}/>
                ))}
            </List>
        </div>
    );
}

function ContactItem({chat, handleOpenChat}) {
    return (
        <ListItem key={chat.id}
                  onClick={() => {
                      handleOpenChat(chat.id, chat.room_name);
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

export default Contacts;

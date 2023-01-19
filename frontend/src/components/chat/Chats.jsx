import React from 'react';
import {useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import {setChatIdAC} from "../../store/chatId/actionsCreators";
import {useDispatch, useSelector} from "react-redux";
import {initGroupChatsAC} from "../../store/groupChats/actionsCreators";

function Chats() {

    const dispatch = useDispatch();
    const chats = useSelector((store) => store.groupChats);

    useEffect(() => {
        dispatch(initGroupChatsAC());
    }, []);

    const handleOpenGroupChat = (id, name) => {
        fetch('/api/groupChats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
            })
        }).then((resp) => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                throw new Error('Error');
            }
        }).then((data) => {
            dispatch(setChatIdAC(data.id))
        })
    }

    return (
        <div>
            <h3>Чат группы</h3>
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
        <ListItem sx={{cursor:"pointer"}} key={chat.id}
                  onClick={() => {
            handleOpenGroupChat(chat.id, chat.name);
        }}>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={chat.name} secondary="Recently" />
        </ListItem>
    );
}


export default Chats;

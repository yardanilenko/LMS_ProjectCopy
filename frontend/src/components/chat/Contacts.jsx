import React from 'react';
import{useState, useEffect} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import {setChatIdAC} from "../../store/chatId/actionsCreators";
import {useDispatch} from "react-redux";

function Contacts() {

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
                    <ContactItem chat={chat} />
                ))}
            </List>
        </div>
    );
}

function ContactItem({chat}) {

    const dispatch = useDispatch();

    return (
        <ListItem key={chat.id}
                  onClick={() => {
                      dispatch(setChatIdAC(chat.id));
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

export default Contacts;

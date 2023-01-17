import React from 'react';
import {useState, useEffect} from "react";
import ScrollToBottom, {useScrollToBottom} from "react-scroll-to-bottom";
import io from "socket.io-client";
import InputEmoji from 'react-input-emoji';
import {css} from '@emotion/css';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ROOT_CSS = css({
    height: window.innerHeight - 160,
});

function Chat({chatID}) {

    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const scrollToBottom = useScrollToBottom();
    const userName = localStorage.getItem('userName') || "";
    const [socket, setSocket] = useState(null);
    const [chatName, setChatName] = useState("");
    const [ourId, setOurId] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    useEffect(() => {
        if (!chatID) return;
        const socket = io('http://localhost:3100');
        socket.emit('join_contact', {chatID});
        setSocket(socket);
        return () => {
            socket.close();
        }
    }, [chatID]);

    useEffect(() => {
        if (!chatID) return;
        fetch(`/api/chats/${chatID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(res.statusText);
            }
        }).then((data) => {
            setMessages(data.messages);
            setChatName(data.chat_name);
            setOurId(data.our_id);
            setIsPublic(data.isPublic);
        })

        // {messages:[], chat_name: "Main public"}
    }, [chatID]);

    const sendMessage = async () => {
        scrollToBottom();
        if (currentMessage !== "") {
            const messageData = {
                chatID,
                user_id: ourId,
                message: currentMessage,
                time: new Date(Date.now()).toLocaleString(),
                user_name: userName,
            }
            await socket.emit('send_message', messageData);
            setMessages((messages) => [...messages, messageData]);
            setCurrentMessage('');
        }
    }

    useEffect(() => {
        if (socket) {
            socket.on('receive_message', (data) => {
                setMessages((messages) => [...messages, data]);
            })
        }
    }, [socket]);

    if (!chatID) {
        return (
            <div style={{display: "flex", width: "100%", height: "100%", justifyContent: "center"}}>
                <h1 style={{textAlign: "center", color: "#b7b7b7", fontSize: "24px"}}>Please select a chat or search new
                    contacts ...</h1>
            </div>
        )
    }

    return (
        <div>
            <div style={{padding: "24px", borderBottom: "1px solid #b7b7b7"}}>
                <img
                    style={{
                        display: "inline",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        marginLeft: "8px",
                        marginBottom: "24px",
                        backgroundColor: "#b7b7b7",
                    }}
                    src={`https://avatars.dicebear.com/api/bottts/${chatName}.svg`}
                    alt=""
                />
                <span style={{marginLeft: "8px", fontWeight: "bold", color: "#d7a7eb"}}>{chatName}</span>
            </div>
            <div className="">
                <ScrollToBottom className={ROOT_CSS}>
                    {messages.map((message, index) => {
                        return (
                            <div
                                style={{
                                    textAlign: ourId === message.user_id ? "right" : "left",
                                    width: "100%",
                                }}
                                key={index}>
                                {isPublic && ourId !== message.user_id && (
                                    <img
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            borderRadius: "50%",
                                            marginLeft: "8px",
                                            marginBottom: "24px",
                                            backgroundColor: "#b7b7b7",
                                            display: "inline"
                                        }}
                                        src={`https://avatars.dicebear.com/api/bottts/${message.user_name}.svg`}
                                        alt=""
                                    />
                                )}
                                <span
                                    style={{
                                        color: ourId === message.user_id ? "red" : "green",
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        textAlign: "left",
                                        display: "inline-block",
                                        borderRadius: "8px",
                                        padding: "8px",
                                        margin: "8px",

                                    }}
                                >
                                    {isPublic && ourId !== message.user_id && (
                                        <span
                                            style={{
                                                display: "block",
                                                fontSize: "10px",
                                                color: "#b7b7b7"
                                            }}
                                        >{message.user_name}</span>
                                    )}
                                    <span style={{fontSize: "14px"}}>{message.message}</span>
                                    <span
                                        style={{
                                            display: "block",
                                            fontSize: "10px",
                                            color: "#b7b7b7"
                                        }}
                                    >{message.time}</span>
                                       <span>{new Date(message.time).getHours() + ":" + new Date(message.time).getMinutes()} </span>
                            </span>
                            </div>
                        )
                    })}
                </ScrollToBottom>
            </div>
            <div style={{padding: "0 16px", display: "flex", justifyContent: "between"}}>
                <InputEmoji
                    value={currentMessage}
                    onChange={setCurrentMessage}
                    cleanOnEnter
                    onEnter={sendMessage}
                    placeholder="Type a message"
                />
            </div>
        </div>
    );
}

export default Chat;

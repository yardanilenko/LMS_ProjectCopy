import React from 'react';
import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {setUsernameAC} from "../../store/profile/actionsCreators";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        }).then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                setError("Неверный логин или пароль");
                throw new Error("Something went wrong");
            }
        })
            .then(data => {
                dispatch(setUsernameAC(data.userName));
                localStorage.setItem("userName", data.userName);
                navigate("/calendar");
            });
    }

    return (
        <Box sx={{
            width:"30%",
            display: 'flex',
            justifyContent: 'center',
            margin: " 200px auto",
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <FormControl sx={{width:"100%",  margin: "5px"}}>
                <TextField  placeholder="Login" onChange={(e) => setLogin(e.target.value)} name="login" variant="outlined" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl sx={{width:"100%",  margin: "5px"}}>
                <TextField  placeholder="Password"  onChange={(e) => setPassword(e.target.value)} name="password" variant="outlined" aria-describedby="my-helper-text" />
            </FormControl>
            <Button onClick={onSubmit} type="submit" variant="contained">Войти</Button>
            {error && <em style={{ color: "red" }}>{error}</em>}
        </Box>
    );
}

export default Login;

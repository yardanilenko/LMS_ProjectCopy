import React from 'react';
import AsyncSelect from 'react-select/async';
import {setChatIdAC} from "../../store/chatId/actionsCreators";
import {useDispatch} from "react-redux";
import {initChatsAC} from "../../store/chats/actionsCreators";

function Search() {

    const dispatch = useDispatch();

    const promiseOptions = (inputValue) =>
        new Promise((resolve, reject) => {
            fetch(`/api/search/users?query=${inputValue}`)
                .then((response) => response.json())
                .then((json) => {
                    resolve(json.users);

                })
                .catch((error) => {
                    reject(error);
                });
        });


    return (
        <div style={{padding:"20px 4px", width:"100%"}}>
            <AsyncSelect
                value={null}
                loadOptions={promiseOptions}
                placeholder={'Поиск ...'}
                getOptionLabel={(option) => option.login}
                getOptionValue={(option) => option.id}
                onChange={(option) => {
                    fetch(`/api/chats`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',

                        },
                        body: JSON.stringify({
                            userId: option.id,
                        })
                    })
                        .then((response) => response.json())
                        .then((json) => {
                            dispatch(setChatIdAC(json.id))
                            dispatch(initChatsAC())
                        })
                }}
                isClearable
            />
        </div>
    );
}

export default Search;

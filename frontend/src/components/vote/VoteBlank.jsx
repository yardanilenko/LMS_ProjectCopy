import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useNavigate, useParams} from "react-router-dom";



function VoteBlank() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [vote, setVote] = useState({});
    const [checkedOptions, setCheckedOptions] = useState({});

    const checkedCount = Object.values(checkedOptions).filter(Boolean).length;


    useEffect(() => {
        fetch(`/api/votes/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.json())
            .then(response => {
                const data = response.data ? JSON.parse(response.data) : {};
                setVote({
                    ...response,
                    data
                });
            })
    }, [id]);

    const handleChange = (event) => {
        setCheckedOptions({
            ...checkedOptions,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/api/votes/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: Object.keys(checkedOptions).filter(key => checkedOptions[key])
                })
            }
        ).then(res => res.json())
            .then(() => {
                navigate(`/votes`);
            })
    }


    return (
        <div>
            <h1>{vote.name}</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <FormGroup>
                    {vote?.data?.options && vote?.data?.options.map(option => (
                        <FormControlLabel
                            control={
                                <Checkbox disabled={checkedCount >= vote?.data?.max && !checkedOptions[option.name]}
                                          checked={!!checkedOptions[option.name]} name={option.name}
                                          onChange={handleChange}/>
                            }
                            label={option.name}
                        />
                    ))}
                </FormGroup>
            </div>
            <div style={{textAlign: "center", marginTop: "30px"}}>
                <span>Минимум {vote?.data?.min}, максимум {vote?.data?.max}</span>
            </div>
            <div style={{textAlign: "center", marginTop: "30px"}}>
                <Button type="submit" disabled={checkedCount < vote?.data?.min} variant="contained" onClick={handleSubmit}>Проголосовать</Button>
            </div>
        </div>
    );
}

export default VoteBlank;

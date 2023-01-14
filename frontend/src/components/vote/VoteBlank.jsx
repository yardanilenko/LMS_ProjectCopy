import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {useParams} from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);


function VoteBlank() {

    const {id} = useParams();

    const [vote, setVote] = useState({});
    const [checkedOptions, setCheckedOptions] = useState({});

    const checkedCount = Object.values(checkedOptions).filter(Boolean).length;
    const variants = vote?.data?.options ? vote?.data?.options?.map(i => i.name) : [];
    const summary = vote.allAnswers ? getSummary(vote.allAnswers, variants) : {};
    const summaryAnswers = Object.values(summary);
    console.log("summaryAnswers", summaryAnswers);
    console.log("variants", variants);

    const loadVote = () => {
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
    }

    useEffect(() => {
        loadVote();
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
                loadVote();
            })
    }


    const data = {
        labels: variants,
        datasets: [
            {
                label: '# of Votes',
                data: summaryAnswers,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            {vote?.name && (
                <h1>{vote.name}</h1>
            )}
            {vote?.isAnswered === false && (
                <>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <FormGroup>
                            {vote?.data?.options && vote?.data?.options.map(option => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disabled={checkedCount >= vote?.data?.max && !checkedOptions[option.name]}
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
                        <Button type="submit" disabled={checkedCount < vote?.data?.min} variant="contained"
                                onClick={handleSubmit}>Проголосовать</Button>
                    </div>
                </>
            )}
            {vote.isAnswered && (
                <div style={{width: "600px",margin: "0 auto", display:"flex", justifyContent:"center", flexDirection:"column"}}>
                    <h1>Результаты</h1>
                    <Doughnut data={data}/>
                </div>
            )}
        </div>
    );
}

const getSummary = (summary, variants) => {
    const result = {};
    variants.forEach(variant => {
        result[variant] = 0;
    })
    summary.forEach(votes => {
        votes.forEach(vote => {
            result[vote]++;
        })
    })
    return result;
}

export default VoteBlank;

import React, {useEffect} from 'react';
import {useForm, useFieldArray, Controller} from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function VoteForm() {

    const {register, control, handleSubmit, reset} = useForm({
        defaultValues: {
            title: "",
            min: "",
            max: "",
            options: [{name: ""}],
            access: []
        }
    });

    const {
        fields,
        append,
        prepend,
        remove
    } = useFieldArray({
        control,
        name: "options"
    });

    const [groups, setGroups] = React.useState([]);

    const onSubmit = (data) => {
        fetch('/votes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.title,
                group_id: data.access,
                data: {
                    min: data.min,
                    max: data.max,
                    options: data.options
                }
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    useEffect(() => {
        fetch('/groups', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setGroups(data);
            })
    }, [])

    return (
        <Box sx={{
            width: 600,
            maxWidth: '100%',
            margin: 'auto',
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Создать голосование </h1>
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Тема голосования"
                    {...register(`title`, {required: true})}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Минимальное количество голосов"
                    {...register(`min`, {required: true})}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Максимальное количество голосов"
                    {...register(`max`, {required: true})}
                />
                <div style={{margin: "30px 0"}}>
                    {fields.map((item, index) => {
                        return (
                            <div key={item.id} style={{display: "flex"}}>
                                <Controller
                                    name={`options.${index}.name`}
                                    control={control}
                                    render={({field}) => (
                                        <TextField
                                            id="outlined-required"
                                            value={field.value}
                                            onChange={field.onChange}
                                            fullWidth
                                            placeholder="Введите вариант ответа"
                                        />
                                    )}
                                />
                                <Button variant="contained" type="button" onClick={() => remove(index)}>
                                    Delete
                                </Button>
                            </div>
                        );
                    })}
                </div>
                <section>
                    <Button
                        variant="contained"
                        type="button"
                        onClick={() => {
                            append({name: ""});
                        }}
                    >
                        append
                    </Button>
                    <Button
                        variant="contained"
                        type="button"
                        onClick={() =>
                            prepend({
                                name: ""
                            })
                        }
                    >
                        prepend
                    </Button>

                    <Button
                        variant="contained"
                        type="button"
                        onClick={() =>
                            reset({
                                title: "",
                                min: "",
                                max: "",
                                options: [{name: ""}]
                            })
                        }
                    >
                        reset
                    </Button>
                </section>
                <Controller
                    name={`access`}
                    control={control}
                    render={({field}) => (
                <FormControl sx={{m: 1, width: 300}}>
                    <InputLabel id="groupSelectLabel">Доступ</InputLabel>
                    <Select
                        labelId="groupSelectLabel"
                        value={field.value}
                        onChange={field.onChange}
                        input={<OutlinedInput label="Доступ"/>}
                        // renderValue={() => (
                        //     <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                        //         {selected.map((value) => (
                        //             <Chip key={value} label={groups.find(i => i.id === value).name} />
                        //         ))}
                        //     </Box>
                        // )}
                        MenuProps={MenuProps}
                    >
                        {groups.map((group) => (
                            <MenuItem
                                key={group.id}
                                value={group.id}
                            >
                                {group.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                        )}
                    />
                <div>
                <Button variant="contained" type="submit">Создать</Button>
                </div>
            </form>
        </Box>
    );
}

export default VoteForm;

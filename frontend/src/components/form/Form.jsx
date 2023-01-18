import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({handleClick}) {

    console.log("thisHandleClick", handleClick);
  const [open, setOpen] = React.useState(false);

  const initialState = {num: 2}
    
  const [input, setInput] = useState(initialState);
  
  let myNum = input.num;
  console.log("🚀 ~ file: Form.jsx:20 ~ FormDialog ~ myNum", myNum)

  const formHandler = (e) => {
    setInput((preMy) => ({...preMy, [e.target.name]: e.target.value}))

}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalHandler = () => {
    setInput(initialState)
}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Сгруппировать
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Формирование групп</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Задайте необходимое количество студентов для группового программирования. Состав группы должен быть в пределах от 2 до 10 человек.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            name='num'
            value={myNum}
            label="Количество студентов"
            onChange={formHandler}
            type="number"
            InputProps={{ inputProps: { min: 2, max: 10 } }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
            <Button onClick={() => {handleClick(+input.num); modalHandler(); handleClose()}} color="primary">
                Подтвердить
            </Button>
            <Button onClick={handleClose} color="primary">
                Отмена
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

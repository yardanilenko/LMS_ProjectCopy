import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Сгруппировать
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Формирование групп</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Задайте необходимое количество студентов для группового программирования. По умолчанию формируются группы по 2 студента.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Количество студентов"
            type="number"
            min="0" 
            max="5" 
            fullWidth
          />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
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

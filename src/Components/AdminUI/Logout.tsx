import * as React from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";



export default function Logout({openPopup, setOpenPopup}){

    

    const handleClose = () => {
        setOpenPopup(false);
      };

    const navigate = useNavigate();

    return (

        <Dialog open={openPopup} onClose={handleClose}sx ={{padding:5}}>
            <DialogTitle>
                Are you sure you want to Logout?
            </DialogTitle>
            <DialogActions sx={{display:'flex', justifyContent:'center', padding: 2}}>
                <Button onClick={() => navigate("/")} variant="contained" sx={{backgroundColor: '#0C7230', '&:hover': {backgroundColor: '#075A24'}}}>Logout</Button>
                <Button onClick={handleClose} variant="outlined" sx={{color: '#0C7230',border: '1px solid #0C7230', '&:hover': {color: '#075A24',border: '1px solid #075A24'}}}>Cancel</Button>
            </DialogActions>
        </Dialog>

    )
}
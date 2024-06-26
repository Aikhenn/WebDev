/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import logActivity from "../../../../api/api.js";
import  { useState } from "react";


import Typography from '@mui/material/Typography';

export default function AccreditDialog({ openPopup, setOpenPopup, rowData, fetchData }) {
  const handleClose = () => {
    setOpenPopup(false);
  };

  const [username, setUsername ]= useState(localStorage.getItem("username") || "Guest");




  const onAccredit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/buyers/${rowData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Accredited' }),
      });

      if (!response.ok) {
        throw new Error('Failed to accredit buyer');
      }
      else{
        await logActivity(`Accredited buyer ${rowData.Username}`, username);
        console.log('Buyer updated:', response);
      }


      fetchData();
      setOpenPopup(false);
    } catch (error) {
      console.error('Error accrediting buyer:', error);
    }
  };

  const onDiscredit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/buyers/${rowData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Non-Accredited' }),
      });

      if (!response.ok) {
        throw new Error('Failed to discredit buyer');
      }
      else{
        await logActivity(`Discredited buyer ${rowData.Username}`, username);
      
      }


      fetchData();
      setOpenPopup(false);
    } catch (error) {
      console.error('Error discrediting buyer:', error);
    }
  };

  return (
    <Dialog open={openPopup} onClose={handleClose}>
      <DialogTitle>Accredit Buyer</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Do you want to accredit this Buyer?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAccredit} sx={{ backgroundColor: '#0C7230', '&:hover': { backgroundColor: '#096228' } }} variant="contained">
          Accredit
        </Button>
        {rowData && rowData.status === 'For Checking' && (
          <Button onClick={onDiscredit} sx={{ backgroundColor: '#B62828', '&:hover': { backgroundColor: '#9E2121' } }} variant="contained">
            Discredit
          </Button>
        )}
        <Button onClick={handleClose} color="primary" variant="outlined">
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
}

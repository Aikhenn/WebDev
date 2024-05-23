import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";


const Dashboard = () => {

    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <>
        <Button onClick={openDialog}>tesyt</Button>
       
        <Dialog open={open}>
            <DialogTitle>
                <div>title</div>
            </DialogTitle>
            <DialogContent>
                <div>content goes here</div>
            </DialogContent>
            <DialogActions>
                <Button>Close</Button>
            </DialogActions>
        </Dialog>
      
    </>
    )
}
export default Dashboard;
import styled from "@emotion/styled";
import './SideBar.scss';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";
import ModalMap from "./ModalMap";

function Sidebar(burgerList) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='styled'>
      <Button onClick={handleOpen}>View map</Button>
      <div style={{ alignSelf: "center" }}>
        <div style={{ marginTop: "5px", borderTop: "ridge" }}>
          <Typography variant="h6">Burger types</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Home Made" />
            <FormControlLabel control={<Checkbox />} label="Resturant" />
          </FormGroup>
        </div>
        <div style={{ marginTop: "5px", borderTop: "ridge" }}>
          <Typography variant="h6">Price</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Cheep" />
            <FormControlLabel control={<Checkbox />} label="Medium" />
            <FormControlLabel control={<Checkbox />} label="Expensive" />
          </FormGroup>
        </div>
        <div style={{ marginTop: "5px", borderTop: "ridge" }}>
          <Typography variant="h6">Location</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Europe" />
            <FormControlLabel control={<Checkbox />} label="Asia" />
            <FormControlLabel control={<Checkbox />} label="USA" />
            <FormControlLabel control={<Checkbox />} label="Africa" />
            <FormControlLabel control={<Checkbox />} label="Oseana" />
          </FormGroup>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <ModalMap burgerMarkers={burgerList} /> */}
      </Modal>
    </div>
  );
}

export default Sidebar;

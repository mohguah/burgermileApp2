import { Box, Typography } from "@mui/material";
import { style } from "@mui/system";
import { burgerCardProps } from "./BurgerCard";
import './BurgerCardModal.scss';

const BurgerCardModal = (props) => {
  return (
    <Box className="modal">
      <Typography id="modal-modal-title" variant="h6">
        {props.Name}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }} >
        {props.Adress}
      </Typography>
    </Box>

    // <div className='modal'>
    //   <div style={{ textAlign: "center" }}>
    //     <h3>{props.Name}</h3>
    //   </div>
    //   <img src={props.img} />
    // </div>
  );
};

export default BurgerCardModal
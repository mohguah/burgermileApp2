import { Box, Grid } from "@mui/material";
import { burgerCardProps } from "./BurgerCard";
import './BurgerCardModal.scss';

const BurgerCardModal = (burgercardData) => {
  return (
    <div className='modal'>
      <div style={{ textAlign: "center" }}>
        <h3>{burgercardData.Name}</h3>
      </div>
      <img src={burgercardData.img} />
    </div>
  );
};

export default BurgerCardModal
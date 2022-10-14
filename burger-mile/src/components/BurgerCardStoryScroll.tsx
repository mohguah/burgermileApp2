import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { burgerCardTextBoxProps } from "./types";

export const BurgerCardStoryScroll = (props: burgerCardTextBoxProps) => {
  return (
    <Box style={{ margin: "5px", height: "250px" }}>
      <Typography variant="h4">{props.title}</Typography>
      <Typography>{props.ratingText}</Typography>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>Price:</Typography>
        <Rating value={props.price} readOnly max={6} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>Food:</Typography>
        <Rating value={props.foodRating} readOnly max={6} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>Atmosphere:</Typography>
        <Rating value={props.atmosphereRating} readOnly max={6} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>It-factor:</Typography>
        <Rating value={props.itfactorRating} readOnly max={6} />
      </div>
    </Box>
  );
};

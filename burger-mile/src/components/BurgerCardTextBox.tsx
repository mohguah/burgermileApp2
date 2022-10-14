import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import distanceBetweenIcon from "../assets/iconDistance.png";

type burgerCardTextBoxProps = {
  Name?: string;
  Adresse?: string;
  City?: string;
  Price?: number;
  Food?: number;
  Atmosphere?: number;
  It_factor?: number;
  Average?: number;
  Average_weighted?: number;
  Gourmet_or_Joint?: string;
  Year?: number;
  LatLng?: number[];
  distanceToResturant?: number;
  id: number;
};

export const BurgerCardTextBox = (props: burgerCardTextBoxProps) => {
  return (
    <Box style={{ margin: "5px", height: "250px" }}>
      <Typography variant="h4">{props.Name}</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis
      </Typography>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>Price:</Typography>
        <Rating value={props.Price} readOnly max={6} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>Food:</Typography>
        <Rating value={props.Food} readOnly max={6} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>Atmosphere:</Typography>
        <Rating value={props.Atmosphere} readOnly max={6} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>It-factor:</Typography>
        <Rating value={props.It_factor} readOnly max={6} />
        {props.distanceToResturant && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "auto",
            }}
          >
            <img src={distanceBetweenIcon} width="25px" height="25px" />
            <Typography variant="body1">
              {props.distanceToResturant.toFixed(0)}km
            </Typography>
          </div>
        )}
      </div>
    </Box>
  );
};


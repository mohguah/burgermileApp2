// import { Box } from "@mui/material";
// import MapGL, {
//   GeolocateControl,
//   Marker,
//   NavigationControl,
//   Popup,
//   MapRef,
// } from "react-map-gl";
// import { modalInitiialViewport } from "../../assets/constant";
// import { BurgerType } from "../BurgerCard/types";
// import { dataList } from "../../assets/data";
// import './SideBar.scss';

// const ModalMap = (burgerMarkers) => {
//   return (
//     <div className="style">
//       <MapGL
//         initialViewState={modalInitiialViewport}
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//         mapboxAccessToken="pk.eyJ1IjoiZnJlaGF1IiwiYSI6ImNreTA2ZmhkajAwNGQydnBjdW9tdGQ2eGgifQ.CDfc1O8BUM1KKOXtw3vzYg"
//       >
//         <NavigationControl />
//         {dataList.map((element) => (
//           <Marker latitude={element.LatLng[0]} longitude={element.LatLng[1]} />
//         ))}
//       </MapGL>
//     </div>
//   );
// };

// export default ModalMap;

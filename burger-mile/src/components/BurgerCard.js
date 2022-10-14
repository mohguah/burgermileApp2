// import { distance, point } from '@turf/turf';
// import './BurgerCard.scss';

// interface burgerCardProps {
//     Name: string;
//     Adress: string;
//     City: string;
//     Price: number;
//     Food: number;
//     Atmosphere: number;
//     It_factor: number;
//     Average: number;
//     Average_weighted: number;
//     Gourmet_or_Joint: string;
//     Year: number;
//     LatLng: number[];
//     img: any;
//     currentPosition: number[] | undefined;
//     id: number;
// };

// const BurgerCard = (props: burgerCardProps) => {
//     function getDistanceToRestaurant(
//         currentPosition: number[],
//         latlngRestaurant: number[]
//     ) {
//         if (!currentPosition) return 0;
//         var from = point(currentPosition);
//         var to = point(latlngRestaurant);
//         return distance(from, to, { units: 'kilometers'});
//     }

//     return (
//         <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         height: props.currentPosition ? "500px" : "400px  ",
//         width: "400px",
//         backgroundColor: "#efefef",
//         boxShadow: "0px 0px 10px rgba(0,0,0,0.36)",
//         borderRadius: "7px",
//       }}
//     >
//       <img src={props.img} height="250px" style={{ borderRadius: "7px" }} />
//       {props.currentPosition ? (
//         <BurgerCardTextBox
//           Name={props.Name}
//           Price={props.Price}
//           Food={props.Food}
//           Atmosphere={props.Atmosphere}
//           It_factor={props.It_factor}
//           distanceToResturant={getDistanceToResturant(
//             props.currentPosition!,
//             props.LatLng!
//           )}
//           id={props.id}
//         />
//       ) : (
//         <BurgerCardStoryScroll
//           id={props.id}
//           title={props.Name}
//           price={props.Price}
//           foodRating={props.Food}
//           atmosphereRating={props.Atmosphere}
//           itfactorRating={props.It_factor}
//           ratingText={""}
//         />
//       )}
//     </div>
//     )
// }

// export default { BurgerCard, burgerCardProps }
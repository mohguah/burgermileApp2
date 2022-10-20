import { Modal } from '@mui/material';
import { useState } from 'react';
import BurgerCard from '../components/BurgerCard';
import './ListView.scss';
import BurgerCardModal from '../components/BurgerCardModal';
import Sidebar from '../components/SideBar';
import { dataList } from '../assets/data';

const ListView = () => {
    const [currentBurgerCard, setCurrentBurgerCard] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = (burgerCardInfo) => {
        setOpen(true);
        if (burgerCardInfo) {
            setCurrentBurgerCard(burgerCardInfo);
        }
    };
    const handleClose = () => setOpen(false);

    return (
        <div className='container'>
            <h1>Hello</h1>
            {/* <Sidebar burgerList={dataList} /> */}
            <div className='main-page'>
                {DataTransferItemList.map((burgercard) => (
                    <div
                        key={burgercard.id}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            handleOpen({
                                Name: burgercard.Name,
                                Adress: "",
                                City: "",
                                Price: burgercard.Price,
                                Food: burgercard.Food,
                                Atmosphere: burgercard.Atmosphere,
                                It_factor: burgercard["It-factor"],
                                Average: 0,
                                Average_weighted: burgercard["Average weighted"],
                                Gourmet_or_Joint: "",
                                Year: 0,
                                LatLng: burgercard.LatLng,
                                img: burgercard.img,
                                // currentPosition: currentPostionUser!,
                                id: burgercard.id,
                            })
                        }
                    >
                        <BurgerCard
                            Name={burgercard.Name}
                            img={burgercard.img}
                            Price={burgercard.Price}
                            Food={burgercard.Food}
                            Atmosphere={burgercard.Atmosphere}
                            It_factor={burgercard["It-factor"]}
                            // currentPosition={currentPostionUser!}
                            LatLng={burgercard.LatLng}
                            Adress={""}
                            City={""}
                            Average={0}
                            Average_weighted={burgercard["Average weighted"]}
                            Gourmet_or_Joint={""}
                            Year={0}
                            id={burgercard.id}
                        />
                    </div>
                ))}
            </div>
            {currentBurgerCard && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <BurgerCardModal
                        Name={currentBurgerCard.Name}
                        img={currentBurgerCard.img}
                        Price={currentBurgerCard.Price}
                        Food={currentBurgerCard.Food}
                        Atmosphere={currentBurgerCard.Atmosphere}
                        It_factor={currentBurgerCard["It_factor"]}
                        // currentPosition={currentPostionUser!}
                        LatLng={currentBurgerCard.LatLng}
                        Adress={""}
                        City={""}
                        Average={0}
                        Average_weighted={currentBurgerCard["Average_weighted"]}
                        Gourmet_or_Joint={""}
                        Year={0}
                        id={currentBurgerCard.id}
                    />
                </Modal>
            )}
        </div>
    )
}

export default ListView

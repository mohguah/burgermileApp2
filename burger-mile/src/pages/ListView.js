import './ListView.scss';

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
        <div>
            'hello'
        </div>
    )
}
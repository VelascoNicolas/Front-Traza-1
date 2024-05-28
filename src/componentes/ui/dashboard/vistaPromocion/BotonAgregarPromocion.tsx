import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import AgregarPromocionModal from './AgregarPromocionModal';

function BotonAgregarPromocion() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        handleClose();
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircleIcon />}
                onClick={handleOpen}
            >
                Agregar
            </Button>
            <AgregarPromocionModal 
                open={open} 
                onClose={handleClose} 
                onSubmit={handleSubmit} 
                iNombre="" 
                iDescripcion=""
                iPrecio="" 
                iFechaDesde="" 
                iFechaHasta=""
            />
        </>
    );
}

export default BotonAgregarPromocion;
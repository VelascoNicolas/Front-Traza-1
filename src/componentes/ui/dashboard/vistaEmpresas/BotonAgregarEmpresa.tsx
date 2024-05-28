import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import AgregarEmpresaModal from './AgregarEmpresaModal';
import { saveEmpresa } from '../../../../servicios/vistaInicio/FuncionesAPI';
import Empresa from '../../../../entidades/Empresa';

function BotonAgregarEmpresa() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (empresa: Empresa) => {
        saveEmpresa(empresa);
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
                Agregar empresa
            </Button>
            <AgregarEmpresaModal 
                open={open} 
                onClose={handleClose} 
                onSubmit={handleSubmit} 
                iEmpresa={new Empresa}
            />
        </>
    );
}

export default BotonAgregarEmpresa;
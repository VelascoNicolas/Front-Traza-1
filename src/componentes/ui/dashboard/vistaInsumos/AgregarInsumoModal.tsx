import { useState } from 'react';
import { Modal, Box, TextField, Typography, Stack, Button } from '@mui/material';

interface AgregarInsumoModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (nombre: string, precio: string, cantidad: string, imgUrl: string) => void;
    initialNombre: string;
    initialPrecio: string;
    initialCantidad: string;
    initialImgUrl: string;
}

function AgregarInsumoModal({ open, onClose, onSubmit, initialNombre, initialPrecio, initialCantidad, initialImgUrl } : AgregarInsumoModalProps) {
    const [nombre, setNombre] = useState(initialNombre);
    const [precio, setPrecio] = useState(initialPrecio);
    const [cantidad, setCantidad] = useState(initialCantidad);
    const [imgUrl, setImgUrl] = useState(initialImgUrl);

    const handleSubmit = () => {
        onSubmit(nombre, precio, cantidad, imgUrl);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" id="modal-title" gutterBottom>
                    Agregar Nuevo Insumo
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <TextField
                        label="Precio"
                        variant="outlined"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                    <TextField
                        label="Cantidad"
                        variant="outlined"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                    <TextField
                        label="URL Imagen"
                        variant="outlined"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" color="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
};

export default AgregarInsumoModal;
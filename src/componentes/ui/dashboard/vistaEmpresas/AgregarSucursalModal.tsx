import { useState } from 'react';
import { Modal, Box, TextField, Stack, Button, FormControlLabel, Checkbox, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { getAllPaises, getLocalidadesIdProvincia, getProvinciasIdPais } from '../../../../servicios/vistaInicio/FuncionesAPI';
import Sucursal from '../../../../entidades/Sucursal';
import Empresa from '../../../../entidades/Empresa';

interface AgregarSucursalModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (sucursal: Sucursal, empresa: Empresa, idLocalidad: number) => void;
    iSucursal: Sucursal;
    iEmpresa: Empresa;
}

function AgregarSucursalModal({ open, onClose, onSubmit, iSucursal, iEmpresa }: AgregarSucursalModalProps) {
    const [sucursal, setSucursal] = useState<Sucursal>(iSucursal);
    const [pais, setPais] = useState(sucursal.domicilio.localidad.provincia.pais.id);
    const [provincia, setProvincia] = useState(sucursal.domicilio.localidad.provincia.id);
    const [localidad, setLocalidad] = useState(sucursal.domicilio.localidad.id);
    const { data: paises } = getAllPaises();
    const { data: provincias } = getProvinciasIdPais(pais);
    const { data: localidades } = getLocalidadesIdProvincia(provincia);

    const handlePaisChange = (event: SelectChangeEvent<number>) => {
        setPais(event.target.value as number);
        setProvincia(0);
        setLocalidad(0);
    };

    const handleProvinciaChange = (event: SelectChangeEvent<number>) => {
        setProvincia(event.target.value as number);
        setLocalidad(0);
    };


    const handleSubmit = () => {
        onSubmit(sucursal, iEmpresa, localidad);
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
                    overflow: 'auto',
                    maxHeight: 600
                }}
            >
                <Box component="form" autoComplete="off" onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <Stack spacing={2}>
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            value={sucursal.nombre}
                            onChange={(e) => setSucursal({ ...sucursal, nombre: e.target.value })}
                        />
                        <TextField
                            label="Hora de Apertura"
                            variant="outlined"
                            type="time"
                            value={sucursal.horarioApertura}
                            onChange={(e) => setSucursal({ ...sucursal, horarioApertura: e.target.value })}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Hora de Cierre"
                            variant="outlined"
                            type="time"
                            value={sucursal.horarioCierre}
                            onChange={(e) => setSucursal({ ...sucursal, horarioCierre: e.target.value })}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={sucursal.esCasaMatriz}
                                    onChange={(e) => setSucursal({ ...sucursal, esCasaMatriz: e.target.checked })}
                                    name="esCasaMatriz"
                                    color="primary"
                                />
                            }
                            label="Es Casa Matriz"
                        />
                        <TextField
                            label="Calle"
                            variant="outlined"
                            value={sucursal.domicilio.calle}
                            onChange={(e) => setSucursal({ ...sucursal, domicilio: { ...sucursal.domicilio, calle: e.target.value } })}
                        />
                        <TextField
                            label="Número"
                            variant="outlined"
                            value={sucursal.domicilio.numero}
                            onChange={(e) => setSucursal({ ...sucursal, domicilio: { ...sucursal.domicilio, numero: parseInt(e.target.value) } })}
                        />
                        <TextField
                            label="Código Postal"
                            variant="outlined"
                            type="number"
                            value={sucursal.domicilio.cp}
                            onChange={(e) => setSucursal({ ...sucursal, domicilio: { ...sucursal.domicilio, cp: parseInt(e.target.value) } })}
                        />
                        <TextField
                            label="Piso"
                            variant="outlined"
                            type="number"
                            value={sucursal.domicilio.piso}
                            onChange={(e) => setSucursal({ ...sucursal, domicilio: { ...sucursal.domicilio, piso: parseInt(e.target.value) } })}
                        />
                        <TextField
                            label="Nro Dpto"
                            variant="outlined"
                            type="number"
                            value={sucursal.domicilio.nroDepto}
                            onChange={(e) => setSucursal({ ...sucursal, domicilio: { ...sucursal.domicilio, nroDepto: parseInt(e.target.value) } })}
                        />
                        <FormControl variant="outlined">
                            <InputLabel id="pais-label">País</InputLabel>
                            <Select
                                labelId="pais-label"
                                value={pais}
                                onChange={handlePaisChange}
                                label="País"
                            >
                                {paises?.sort((a, b) => a.nombre.localeCompare(b.nombre))
                                .map((pais) => (
                                    <MenuItem key={pais.id} value={pais.id}>
                                        {pais.nombre}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" disabled={!pais}>
                            <InputLabel id="provincia-label">Provincia</InputLabel>
                            <Select
                                labelId="provincia-label"
                                value={provincia}
                                onChange={handleProvinciaChange}
                                label="Provincia"
                            >
                                {provincias?.sort((a, b) => a.nombre.localeCompare(b.nombre))
                                .map((provincia) => (
                                    <MenuItem key={provincia.id} value={provincia.id}>
                                        {provincia.nombre}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" disabled={!provincia}>
                            <InputLabel id="localidad-label">Localidad</InputLabel>
                            <Select
                                labelId="localidad-label"
                                value={localidad}
                                onChange={(e) => setLocalidad(e.target.value as number)}
                                label="Localidad"
                            >
                                {localidades?.sort((a, b) => a.nombre.localeCompare(b.nombre))
                                .map((localidad) => (
                                    <MenuItem key={localidad.id} value={localidad.id}>
                                        {localidad.nombre}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="primary" type="submit">
                            Guardar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={onClose}>
                            Cancelar
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
};

export default AgregarSucursalModal;

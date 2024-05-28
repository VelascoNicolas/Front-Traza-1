import ArticuloInsumo from "./ArticuloInsumo";
import ArticuloManufacturado from "./ArticuloManufacturado";
import Imagen from "./Imagen";

class Promocion {
    id: number = 0;
    denominacion: string = '';
    fechaDesde: string = '';
    fechaHasta: string = '';
    horaDesde: string = '';
    eliminado: boolean = false;
    horaHasta: string = '';
    descripcionDescuento: string = '';
    precioPromocional: number = 0;
    tipoPromocion: string = '';
    articulosManufacturados: ArticuloManufacturado[] = [];
    articuloInsumos: ArticuloInsumo[] = [];
    imagenes: Imagen[] = [];
}

export default Promocion
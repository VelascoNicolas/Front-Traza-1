import Categoria from "./Categoria";
import Imagen from "./Imagen";
import UnidadMedida from "./UnidadMedida";

class Articulo {
    id: number = 0;
    eliminado: boolean = false;
    denominacion: string = '';
    precioVenta: number = 0;
    imagenes: Imagen[] = [];
    unidadMedida: UnidadMedida = new UnidadMedida;
    categoria: Categoria = new Categoria;

}

export default Articulo;
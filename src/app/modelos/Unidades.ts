export interface IUnidades{
  id: string,
  nombre: string,
  estatus: string,
  tipo: string
}

export interface ITipoUnidad{
  id_tipo_unidad: number,
  tipo_unidad: string,
}

export interface ITipoCombustible{
  id_tipo_combustible: number,
  nombre_combustible: string,
}

export interface ITicket{
  idTicket: number,
  nombre: string,
  fecha: Date,
  km_anterior: number,
  km_actual: number,
  estacion: string,
}

export interface IUnidades{
  id_unidad: number,
  nombre_unidad: string,
}

export interface IEstaciones{
  id_estacion: number,
  nombre_estacion: string,
}

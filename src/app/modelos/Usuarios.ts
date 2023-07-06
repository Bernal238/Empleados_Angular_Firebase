export interface InfoEmpleados{
    nomina: number,
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    turno: ITurnos,
    puesto: IPuestos
}

export interface IPuestos{
  idPuesto: number,
  nombrePuesto: string;
}

export interface ITurnos{
  idTurno: number,
  nombreTurno: string
}

export interface IUsuarios{
  usuario: number,
  nombre: string,
  puesto: string,
  turno: string
}

export interface IRespuestaLogin{
  estatus: number,
  respuesta: ILogin
}

export interface ILogin{
  idBombero: string
  token: string,
  nombreCompleto: string,
  idUsuario: string,
  puesto: string,
}

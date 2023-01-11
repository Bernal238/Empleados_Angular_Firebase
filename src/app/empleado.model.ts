//AQUI SE CREAN LOS OBJETOS DE TIPO EMPLEADO}
export class Empleado{
    nombres: string="";
    apellidoPaterno:string="";
    apellidoMaterno:string="";
    curp:string="";
    rfc:string="";
    telefono:number=0;

    constructor(nombres:string, apellidoPaterno:string, apellidoMaterno:string, curp:string, rfc:string, telefono:number){
        this.nombres = nombres;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.curp = curp;
        this.rfc = rfc;
        this.telefono = telefono;
    }

}
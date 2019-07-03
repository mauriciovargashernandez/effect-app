import { Action } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = '[USUARIO] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[USUARIO] Cargar usuario Fail';
export const CARGAR_USUARIO_SUCCESS = '[USUARIO] Cargar usuario Success';


export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    constructor( public id: number ) {}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    constructor( public payload: any ) {}
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor( public usuario: UsuarioModel ) {}
}

export type usuarioAcciones = CargarUsuario |
                                CargarUsuarioFail |
                                CargarUsuarioSuccess;
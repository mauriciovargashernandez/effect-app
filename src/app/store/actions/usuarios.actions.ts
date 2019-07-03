import { Action } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[USUARIOS] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[USUARIOS] Cargar usuarios Fail';
export const CARGAR_USUARIOS_SUCCESS = '[USUARIOS] Cargar usuarios Success';


export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor( public payload: any ) {}
}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;

    constructor( public usuarios: UsuarioModel[] ) {}
}

export type usuariosAcciones = CargarUsuarios |
                                CargarUsuariosFail |
                                CargarUsuariosSuccess;
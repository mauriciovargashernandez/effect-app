import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as usuarioActions from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ) {}

    @Effect()
    cargarUsuario$ = this.actions$.pipe(
                                        ofType( usuarioActions.CARGAR_USUARIO ),
                                        switchMap( action => {
                                            const id = action['id'];
                                            return this.usuariosService.getUserById(id)
                                                .pipe(
                                                    map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                                                    catchError( error => of( new usuarioActions.CargarUsuarioFail(error) ) )
                                                );
                                        })
                                        );

}

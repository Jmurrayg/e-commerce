import React from 'react';
//import axios from 'axios';

export default function Signup(){
    return(
    <>
            <form >
            <div className="container my-4">
            <div className="row">
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text"  className="form-control" id="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text"  className="form-control" id="first_name" placeholder="Primer Nombre" aria-label="first_name" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text"  className="form-control" id="last_name" placeholder="Apellido" aria-label="last_name" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="password"  className="form-control" id="password" placeholder="Contraseña" aria-label="password" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="password" className="form-control" id="password_confirmation" placeholder="Confirmación de contraseña" aria-label="password_confirmation" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div className="col-6 mt-4">
                <button type="submit" className="btn btn-info">Crear Cuenta</button>
            </div>
            </div>
        </div>
        </form>
    </>
    )
}
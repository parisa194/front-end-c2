import PropTypes from 'prop-types';
import { useState } from "react";

export const Form = ({ onCreateUser  }) => {
    return (
        <>
        <div className="form-container">
            <h2 className="form-title">Crear Nuevo Usuario</h2>
            <form onSubmit={ onCreateUser } className='user-form'>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre"
                        required
                        />
                        </div>
                <div className="form-group">
                    <input 
                        type="number"
                        name="phone"
                        placeholder="Teléfono"
                        required
                        />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"    
                        required
                        />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        required    
                        />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        name="age"
                        placeholder="Edad"
                        required    
                        />
                </div>
                <div className="form-group">
                    <input
                        type="url"
                        name='image'
                        placeholder="URL de la Imagen"
                        required    
                        />
                </div>
                <button type="submit" className="btn-primary">Crear Usuario</button>
            </form>
        </div>
    </>
    );
};

Form.propTypes = {
    onCreateUser: PropTypes.func.isRequired,
};

Form.defaultProps = {
    onCreateUser: () => {},
};
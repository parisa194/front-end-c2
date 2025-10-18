import PropTypes from 'prop-types';
import { User } from './User.jsx';


export const Users = ({ users = [] }) => {
    return (
        <>
            <div className="users-container">
                <h2 className="users-title">Lista De Usuarios</h2>
                {users.lenght === 0 ? (
                    <p className="no-users">No hay usuarios disponibles.</p>
                ) : (
                    <div className='users-grid'>
                        {users.map((user) => 
                        (<User key={user.id} User={user} />

                        ))}
                        </div>
                )}
            </div>
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
};

Users.defaultProps = {
    users: [],
};
                    
                







    


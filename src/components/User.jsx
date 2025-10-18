import PropTypes from 'prop-types';

export const User = ({ User = {} }) => {
    return (
        <>
            <div key ={User.id} className="user-card">
                <img src={User.image} alt ={User.name} className="user-image" />
                <h2 className="user-name">{User.name}</h2>
                <h3 className="phone">{User.phone}</h3>
                <p className="email">{User.email}</p>
                <p className="address">{User.address}</p>
                <p className="age">{User.age} years old</p>
                <span className="user-id">ID: {User.id}</span>
            </div>
        </>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

User.defaultProps = {
    user: {},
};
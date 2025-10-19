import { useState } from 'react';
import PropTypes from 'prop-types';
import './User.css';

// Accept either `user` or legacy `User` prop for compatibility
export const User = ({ user, User }) => {
    const u = user || User || {};
    const [flipped, setFlipped] = useState(false);

    const toggle = (e) => {
        e && e.preventDefault();
        setFlipped((s) => !s);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setFlipped((s) => !s);
        }
    };

    return (
        <div
            className={`flip-card${flipped ? ' flipped' : ''}`}
            role="button"
            tabIndex={0}
            onClick={toggle}
            onKeyDown={onKeyDown}
            aria-pressed={flipped}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front user-card">
                    <img src={u.photoUrl} alt={u.name} className="user-image" />
                    
                    <h2 className="user-name">{u.name}</h2>
                </div>
                <div className="flip-card-back user-card">
                    <h2 className="user-name">{u.name}</h2>
                    <p className="phone">{u.phone}</p>
                    <p className="email">{u.email}</p>
                    <p className="address">{u.address}</p>
                    <p className="age">{u.age} years old</p>
                    <span className="user-id">ID: {u.id}</span>
                </div>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object,
    User: PropTypes.object,
};

User.defaultProps = {
    user: {},
    User: {},
};
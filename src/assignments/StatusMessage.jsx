import React from 'react';

const StatusMessage = ({isLoggedIn}) => {
    return (
        <div className="bg-purple-950 text-white py-5 px-12 text-center mb-2">
            <p>{isLoggedIn ? 'Welcome, User!' : 'Please log in'}</p>
        </div>
    );
};

export default StatusMessage;
import React, { useState } from 'react';
import axios from 'axios';

function Post() {
    const [message, setMessage] = useState('');

    const sentToServer = () => {
        const token = localStorage.getItem('jwtToken');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        axios.post('http://localhost:3000/post-message', { message })
            .then((response) => {
                setMessage('');
                // Navigate('getSpecificUserMsg'); // Assuming Navigate is a function, you can uncomment this line if needed
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sentToServer}>Send</button>
        </div>
    );
}

export default Post;
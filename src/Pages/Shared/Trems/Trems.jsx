import React from 'react';
import { Link } from 'react-router-dom';

const Trems = () => {
    return (
        <div>
            <h2>trems page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem, laudantium magnam autem velit quod sed corporis molestiae officia. Dolore, sit.</p>
            
            <p>Go Back to <Link to='/register'>Register</Link></p>
            
        </div>
    );
};

export default Trems;
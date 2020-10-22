import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className="errorPage contactPage">

<div className="d-flex justify-content-center  align-items-center">

<div id="error">
    
<div id="notfound">
<div class="notfound">
<div class="notfound-404">
    <h1>404</h1>
</div>
<Link to="/home">
<a href="">Homepage</a>
</Link>
</div>
</div>

</div>

</div>
        </div>
        
    );
};

export default Error;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog contactPage">
            <h1> Sorry I haven't started blog yet !! </h1>
            <h1>😞 😞 😞</h1><br/>
            <Link to="/home">
                <Button>
                    Go to Homepage
                </Button>
            </Link>
        </div>
    );
};

export default Blog;
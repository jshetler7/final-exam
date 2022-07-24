import * as React from 'react';

const Home = () => {
    return(
        <div className="container vh-100 vw-100">
            <div className="row justify-content-center">
                <div className="card col-12 col-md-10 text-center shadow-lg mt-5">
                    <div className="card-title">
                        <h1>Bookstore, I guess?</h1>
                        <div className="card-body">
                            <div className="card-text">
                                <p>Welcome to my final exam. This has been insanely hard and I really want to take a break right about now.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <p className='text-light'>Use the navbar to the upper right to take a gander at what this caffeine-induced nightmare has to offer! No promises on what you'll find though, ya know, only 4 hours and all...</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
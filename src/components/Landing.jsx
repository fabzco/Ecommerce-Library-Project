import React from 'react';
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/f451.gif';

const Landing = () => {
    return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>Americas most awarded banned literature platform</h1>
                    <h2>Find your forbidden book with <span className="orange">Library</span></h2>
                    <Link to="/books">
                      <button className ="btn">Browse Books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                   <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </header>
    </section>

    );
}

export default Landing;
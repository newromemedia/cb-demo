import React from 'react';
import { Search } from '../spec/Search';
import '../../styles/header.scss'

import logo from '../../assets/images/Chatter.png';
import logoOne from '../../assets/images/icons8-microphone-384.png'

export const Header = () => {

    return (
        <header className="header">
            <figure>
                <img src={logo} alt="Chatter Cast Logo" width="150px"/>
            </figure>
            
                {/*
                <figure>
                    Framework Option

                    <div className="logo__container">
                        <h1 className="logo__title">Chatter<br/>Cast</h1>
                        <img className="logo__img" src={logoOne} alt="Chatter Cast Logo Microphone" width="50px" height="50px"/>
                    </div> 
                </figure>
                */}
            <div className="search__bar">
                <Search />
            </div>

                {/* 
                    Room for up to four links
                */}

            <nav>
                <button>Chatters</button>
                <button>Gossip</button>
                <button>Profile</button>
                <button>Link Four</button>
            </nav>
        </header>
    )
}
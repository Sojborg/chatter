﻿import React, {useContext} from 'react';

import './TextContainer.css';
import {SocketContext} from "../Providers/SocketProvider";

export const TextContainer = () => {
    const {users} = useContext(SocketContext);
    
    return (<div className="textContainer">
            <div>
                <h2>People online <span role="img" aria-label="emoji">💬</span></h2>
            </div>
            {
                users
                    ? (
                        <div>
                            <div className="activeContainer">
                                <p>
                                    {users.map(({name}: any) => (
                                        <div key={name} className="activeItem">
                                            {name}
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </div>
                    )
                    : null
            }
        </div>
    )
};
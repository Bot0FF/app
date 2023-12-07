import React from 'react';
import { NavLink } from 'react-router-dom';
import "./dialogs.css";

const DialogItem = (props) => {
    let path = "/mail/" + props.id;

    return (
        <div className="mail">
            <NavLink to={path}>{props.from}</NavLink>
        </div>
    );
};

export default DialogItem;
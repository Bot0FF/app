import React from 'react';

const Profile = (props) => {
    return (
        <div className="players-state">
            <div>
                <h3>Игрок: {props.player.name}</h3>
                <h3>Здоровье: {props.player.hp}</h3>
                <h3>Мана: {props.player.mana}</h3>
            </div>
        </div>
    );
};

export default Profile;
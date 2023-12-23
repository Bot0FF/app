import "./players.css";
import React from 'react';

const Players = (props) => {
    return (
        <div className="players-state">
            <div>
                <h3>Количество игроков: {props.totalPlayersCount}</h3>
                {props.players.map(player =>
                    <div key={player.id}>
                        <span>
                            <button onClick={() => props.onGetPlayerProfile(player.name)}>{player.name}</button>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Players;
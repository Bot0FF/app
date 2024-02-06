import React from 'react';

const Inventory = (props) => {
    console.log(props)
    return (
        <div>
            <u style={{ color: "#744444" }}>Вещи игрока {props.player.name}</u>
            <div style={{ marginTop: "5px" }}>
                {props.things?.map(thing => {
                    return <li key={thing.id} style={{ borderBottom: "1px dashed #574444" }}>{thing.name} (Состояние: {thing.duration})</li>
                })}
            </div>
        </div>
    );
};

export default Inventory;
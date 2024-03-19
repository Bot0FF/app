
import React from 'react';

const Attribute = (props) => {
    return (<>
        {props.player.bonusPoint > 0
            ?
            <u>Свободных очков для распределения: {props.player.bonusPoint}</u>
            :
            <></>
        }
        <div className="bonus-attribute-content">
            <span className="bonus-attribute-item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <text>Сила: {props.player.strength}</text>
                        <span
                            onClick={() => { props.setUpAttribute("strength") }}

                        >(+1)</span>
                        <span
                            onClick={() => { props.setDownAttribute("strength") }}
                        >(-1)</span>
                    </>
                    :
                    <></>
                }
            </span>
            <span className="bonus-attribute-item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <text>Интеллект: {props.player.intelligence}</text>
                        <span
                            onClick={() => { props.setUpAttribute("intelligence") }}
                        >(+1)</span>
                        <span
                            onClick={() => { props.setDownAttribute("intelligence") }}
                        >(-1)</span>
                    </>
                    :
                    <></>
                }
            </span>
            <span className="bonus-attribute-item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <text>Ловкость: {props.player.dexterity}</text>
                        <span
                            onClick={() => { props.setUpAttribute("dexterity") }}
                        >(+1)</span>
                        <span
                            onClick={() => { props.setDownAttribute("dexterity") }}
                        >(-1)</span>
                    </>
                    :
                    <></>
                }
            </span>
            <span className="bonus-attribute-item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <text>Выносливость: {props.player.endurance}</text>
                        <span
                            onClick={() => { props.setUpAttribute("endurance") }}
                        >(+1)</span>
                        <span
                            onClick={() => { props.setDownAttribute("endurance") }}
                        >(-1)</span>
                    </>
                    :
                    <></>
                }
            </span>
            <span className="bonus-attribute-item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <text>Удача: {props.player.luck}</text>
                        <span
                            onClick={() => { props.setUpAttribute("luck") }}
                        >(+1)</span>
                        <span
                            onClick={() => { props.setDownAttribute("luck") }}
                        >(-1)</span>
                    </>
                    :
                    <></>
                }
            </span>
        </div>
    </>
    );
};

export default Attribute;
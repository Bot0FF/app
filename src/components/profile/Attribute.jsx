
import React from 'react';

const Attribute = (props) => {
    return (<>
        {props.player.bonusPoint > 0
            ?
            <u>Свободных очков для распределения: {props.player.bonusPoint}</u>
            :
            <></>
        }
        <div className="content-attribute--button">
            <span className="attribute-button--item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <span>Сила: {props.player.strength}</span>
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
            <span className="attribute-button--item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <span>Интеллект: {props.player.intelligence}</span>
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
            <span className="attribute-button--item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <span>Ловкость: {props.player.dexterity}</span>
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
            <span className="attribute-button--item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <span>Выносливость: {props.player.endurance}</span>
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
            <span className="attribute-button--item">
                {props.player.bonusPoint > 0
                    ?
                    <>
                        <span>Удача: {props.player.luck}</span>
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
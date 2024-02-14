import { AttributeButton } from '../../common/util/button/ProfileButton';
import React from 'react';

const Attribute = (props) => {
    return (<>
        <u>Свободных очков для распределения: {props.player.bonusPoint}</u>
        <div
            className="content-attribute--button"
        >
            <li>Сила: {props.player.strength}</li>
            {props.player.bonusPoint > 0
                ?
                <AttributeButton
                    onClick={() => { }}
                />
                :
                <></>
            }
        </div>
        <div className="content-attribute--button">
            <li>Интеллект: {props.player.intelligence}</li>
            {props.player.bonusPoint > 0
                ?
                <AttributeButton
                    onClick={() => { }}
                />
                :
                <></>
            }
        </div>
        <div className="content-attribute--button">
            <li>Ловкость: {props.player.dexterity}</li>
            {props.player.bonusPoint > 0
                ?
                <AttributeButton
                    onClick={() => { }}
                />
                :
                <></>
            }
        </div>
        <div className="content-attribute--button">
            <li>Выносливость: {props.player.endurance}</li>
            {props.player.bonusPoint > 0
                ?
                <AttributeButton
                    onClick={() => { }}
                />
                :
                <></>
            }
        </div>
        <div className="content-attribute--button">
            <li>Удача: {props.player.luck}</li>
            {props.player.bonusPoint > 0
                ?
                <AttributeButton
                    onClick={() => { }}
                />
                :
                <></>
            }
        </div>
    </>
    );
};

export default Attribute;
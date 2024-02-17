import React from 'react';
import { Tooltip } from 'react-tooltip';

const UserInfoTooltip = ({ unit }) => {
    let effect = unit.fightEffect;
    let fightEffect = [
        { name: "Здоровье", effect: effect.e_Hp, duration: effect.de_Hp },
        { name: "Мана", effect: effect.e_Mana, duration: effect.de_Mana },
        { name: "Физ урон", effect: effect.e_PhysEff, duration: effect.de_PhysEff },
        { name: "Маг сила", effect: effect.e_MagEff, duration: effect.de_MagEff },
        { name: "Физ защита", effect: effect.e_PhysDef, duration: effect.de_PhysDef },
        { name: "Маг защита", effect: effect.e_MagDef, duration: effect.de_MagDef },

    ]
    return (
        <Tooltip
            key={unit.id}
            anchorSelect={`.unit-info-${unit.id}`}
            style={{
                color: "#816767",
                borderRadius: 6,
                fontSize: 14,
                background: "#24252d"
            }}
            border={"1px solid #816767"}
        >
            <div>
                <li>Физический урон: {unit.physDamage}</li>
                <li>Физическая защита: {unit.physDefense}</li>
                <li>Сила магии: {unit.magModifier}</li>
                <li>Магическая защита: {unit.physDefense}</li>
                <li>Шанс блокирования: {unit.chanceBlock}%</li>
                <li>Шанс уворота: {unit.chanceEvade}%</li>
                <u>Эффеты:</u>
                <br />
                {Array.from(fightEffect).map(e => {
                    if (e.duration != 0) {
                        return <span key={e.name}>
                            {e.name} {e.effect > 0 ? `+${e.effect}` : e.effect} на {e.duration} раунд(а)
                        </span>
                    }
                })}
            </div>
        </Tooltip>
    );
};

const FightLineTooltip = ({ title, k }) => {
    return (
        <Tooltip
            anchorSelect={`.unit-${k}`}
            style={{
                color: "#816767",
                borderRadius: 6,
                fontSize: 14,
                background: "#24252d"
            }}
        >
            {title}
        </Tooltip>
    );
};

export {
    UserInfoTooltip,
    FightLineTooltip
};
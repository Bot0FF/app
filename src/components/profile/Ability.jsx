import React, { useState, useEffect } from 'react';
import Modal from '../../common/util/modal/Modal';
import { SortButton, AbilityButton } from '../../common/util/button/ProfileButton';

const Ability = (props) => {
    const [ability, setAbility] = useState({});
    const [abilities, setAbilities] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        setAbilities(props.abilities)
    }, [props.abilities])

    //делает модальное окно активным и устанавливает в useState выбранное умение
    const setModal = (isActive, ability) => {
        setModalActive(isActive);
        setAbility(ability);
    }

    //сортировка способностей по skillType
    const sortAbilities = (sort) => {
        let sortAbilities = Array.from(props.abilities).filter(ability => (
            sort === true ? ability.currentAbility === sort : ability.skillType.includes(sort)
        ));
        setAbilities(sortAbilities);
    }

    //добавляет умение в избранное 
    const addCurrentUnitAbility = (isActive, abilityId) => {
        setModalActive(isActive);
        props.addCurrentUnitAbility(abilityId);
    }

    //удаляет умение из избранного
    const removeCurrentUnitAbility = (isActive, abilityId) => {
        setModalActive(isActive);
        props.removeCurrentUnitAbility(abilityId);
    }

    return (<>
        <div className="content-sort">
            <SortButton
                name={"Избранное"}
                onClick={() => { sortAbilities(true) }}
            />
            <SortButton
                name={"Оружие"}
                onClick={() => { sortAbilities("WEAPON") }}
            />
            <SortButton
                name={"Огонь"}
                onClick={() => { sortAbilities("FIRE") }}
            />
            <SortButton
                name={"Вода"}
                onClick={() => { sortAbilities("WATER") }}
            />
            <SortButton
                name={"Земля"}
                onClick={() => { sortAbilities("LAND") }}
            />
            <SortButton
                name={"Воздух"}
                onClick={() => { sortAbilities("AIR") }}
            />
        </div>
        <u>Изученные умения:</u>
        <br />
        <UnitAbilities
            abilities={abilities}
            setModal={setModal}
        />
        <Modal active={modalActive} setActive={setModalActive}>
            <ModalAbility
                ability={ability}
                addCurrentUnitAbility={addCurrentUnitAbility}
                removeCurrentUnitAbility={removeCurrentUnitAbility}
            />
        </Modal>
    </>
    );
};

//список умений unit
const UnitAbilities = ({ abilities, setModal }) => {
    return <ul>
        {Array.from(abilities).map(ability => {
            return <li className="content-list--item"
                key={ability.id}
                onClick={() => setModal(true, ability)}
            >
                {ability.currentAbility ? <>(И){ability.name}</> : <>{ability.name}</>}
            </li>
        })}
    </ul>
}

//выбранное умение в модальном окне
const ModalAbility = (props) => {
    return <div>
        <u>{props.ability.name}</u>
        <li>Описание: {props.ability.description}</li>
        <li>Магический урон: ((сила магии unit + навык + сила магии оружия) * урон умения)</li>
        <li>Влияние на физический урон: {props.ability.physEffect}</li>
        <li>Влияние на магический урон: {props.ability.magEffect}%</li>
        <li>Влияние на физическую защиту: {props.ability.physDefense}</li>
        <li>Влияние на магическую защиту: {props.ability.magDefense}</li>
        <li>Затрачиваемая мана: {props.ability.manaCost}</li>
        {props.ability.currentAbility
            ?
            <AbilityButton
                name={"Из избранного"}
                onClick={() => { props.addCurrentUnitAbility(false, props.ability.id) }}
            />
            :
            <AbilityButton
                name={"В избранное"}
                onClick={() => { props.removeCurrentUnitAbility(false, props.ability.id) }}
            />
        }
    </div>
}

export default Ability;
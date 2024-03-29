import React, { useState, useEffect } from 'react';
import Modal from '../../../common/util/modal/Modal';
import { SortButton, InventoryButton } from '../../../common/util/button/ProfileButton';
import "./home.css";

const Take = (props) => {
    const [thing, setThing] = useState({});
    const [unitThings, setUnitThings] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        setUnitThings(props.thingsHome)
    }, [props.thingsHome])

    //делает модальное окно активным и устанавливает в useState выбранную вещь
    const setModal = (isActive, thing) => {
        setModalActive(isActive);
        setThing(thing);
    }

    //сортировка предметов по objectType
    const sortUnitThings = (sort) => {
        let sortThings = Array.from(props.thingsHome).filter(thing => (
            sort === true ? thing.use === sort : sort.includes(thing.objectType)
        ));
        setUnitThings(sortThings);
    }

    //забрать предмет со склада
    const takeHomeThing = (isActive, thingId) => {
        setModalActive(isActive);
        props.takeHomeThing(thingId);
    }

    return (<>
        <div className="home-content-sort">
            <SortButton
                name={"Все"}
                onClick={() => { }}
            />
            <SortButton
                name={"Оружие"}
                onClick={() => { sortUnitThings("WEAPON") }}
            />
            <SortButton
                name={"Броня"}
                onClick={() => { sortUnitThings("HEAD HAND BODY LEG") }}
            />
            <SortButton
                name={"Зелья"}
                onClick={() => { }}
            />
            <SortButton
                name={"Свитки"}
                onClick={() => { }}
            />
            <SortButton
                name={"Книги"}
                onClick={() => { }}
            />
            <SortButton
                name={"Разное"}
                onClick={() => { }}
            />
        </div>
        <div className="home-content-info">
            {props.info
                ?
                <u>{props.info}</u>
                :
                <u>Забрать вещи</u>
            }
            <UnitInventory
                things={unitThings}
                setModal={setModal}
            />
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <ModalThing
                player={props.player}
                thing={thing}
                takeHomeThing={takeHomeThing}
            />
        </Modal>
    </>
    );
};
//склад unit
const UnitInventory = ({ things, setModal }) => {
    return <ul>
        {Array.from(things).map(thing => {
            return <li className="content-info-list-item"
                key={thing.id}
                onClick={() => setModal(true, thing)}
            >
                {thing.name} (Состояние: {thing.condition})
            </li>
        })}
    </ul>
}

//выбранный предмет в модальном окне
const ModalThing = (props) => {
    return <div>
        <u>{props.thing.name}</u>
        <li>Описание: {props.thing.description}</li>
        <li>Добавляет здоровья: {props.thing.hp}</li>
        <li>Добавляет маны: {props.thing.mana}</li>
        <li>Добавляет физического урона: {props.thing.physDamage}</li>
        <li>Увеличение силы магии: {props.thing.magModifier}%</li>
        <li>Добавляет физической защиты: {props.thing.physDefense}</li>
        <li>Добавляет магической защиты: {props.thing.magDefense}</li>
        <li>Состояние: {props.thing.condition}/100</li>
        <InventoryButton
            name={"Оставить"}
            onClick={() => props.takeHomeThing(false, props.thing.id)}
        />
    </div>
}

export default Take;
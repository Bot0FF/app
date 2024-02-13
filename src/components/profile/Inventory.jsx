import React, { useState } from 'react';
import Modal from '../../common/util/modal/Modal';
import MainButton from '../../common/util/button/MainButton';
import SortButton from '../../common/util/button/SortButton';

const Inventory = (props) => {
    const [thing, setThing] = useState({});
    const [modalActive, setModalActive] = useState(false);

    //делает модальное окно активным и устанавливает в useState выбранную вещь
    const setModal = (isActive, thing) => {
        setModalActive(isActive);
        setThing(thing);
    }

    //надеть вещь из инвентаря, закрыть модальное окно
    const putOnInventoryThing = (isActive, thingId) => {
        setModalActive(isActive);
        props.putOnInventoryThing(thingId);
    }

    //снять вещь из инвентаря, закрыть модальное окно
    const takeOffInventoryThing = (isActive, thingId) => {
        setModalActive(isActive);
        props.takeOffInventoryThing(thingId);
    }

    //удалить вещь из инвентаря, закрыть модальное окно
    const removeInventoryThing = (isActive, thingId) => {
        setModalActive(isActive);
        props.removeInventoryThing(thingId);
    }

    return (<>
        <div className="content-inventory--sort">
            <SortButton
                name={"Надето"}
                onClick={() => { }}
            />
            <SortButton
                name={"Оружие"}
                onClick={() => { }}
            />
            <SortButton
                name={"Броня"}
                onClick={() => { }}
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
        {props.info
            ?
            <u>{props.info}</u>
            :
            <u>Вещи игрока {props.player.name}</u>
        }
        <br />
        <ul  className="content-inventory--item">
            {Array.from(props.things).map(thing => {
                if (thing.use === true) {
                    return <li
                        key={thing.id}
                        onClick={() => setModal(true, thing)}
                    >
                        (Н){thing.name} (Состояние: {thing.duration})
                    </li>
                }
                else {
                    return <li
                        key={thing.id}
                        onClick={() => setModal(true, thing)}
                    >
                        {thing.name} (Состояние: {thing.duration})
                    </li>
                }
            })}
        </ul>
        <Modal active={modalActive} setActive={setModalActive}>
            <span>
                <u>{thing.name}</u>
                <li>Описание: {thing.description}</li>
                <li>Добавляет здоровья: {thing.hp}</li>
                <li>Добавляет маны: {thing.mana}</li>
                <li>Добавляет физического урона: {thing.physDamage}</li>
                <li>Добавляет магического урона: {thing.magDamage}</li>
                <li>Модификатор магического урона: {thing.magDamageModifier}</li>
                <li>Добавляет физической защиты: {thing.physDefense}</li>
                <li>Добавляет магической защиты: {thing.magDefense}</li>
                <li>Состояние: {thing.duration}/100</li>
                <MainButton
                    name={"Надеть"}
                    onClick={() => putOnInventoryThing(false, thing.id)}
                />
                <MainButton
                    name={"Снять"}
                    onClick={() => takeOffInventoryThing(false, thing.id)}
                />
                <MainButton
                    name={"Выбросить"}
                    onClick={() => removeInventoryThing(false, thing.id)}
                />
            </span>
        </Modal>
    </>
    );
};

export default Inventory;
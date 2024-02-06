import React, { useState, useEffect } from 'react';
import Modal from '../../common/util/modal/Modal';
import MainButton from '../../common/util/button/MainButton';

const Inventory = (props) => {
    const [thing, setThing] = useState({});
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        props.getThings();
    }, [])

    //делает модальное окно активным и устанавливает в useState выбранную вещь
    const setModal = (isActive, thing) => {
        setModalActive(isActive);
        setThing(thing);
    }
    return (<>
        {props.info
            ?
            <u>{props.info}</u>
            :
            <u>Вещи игрока {props.player.name}</u>
        }
        <br />
        <div>
            {props.things?.map(thing => {
                if (thing.use === true) {
                    return <li
                        key={thing.id}
                        style={{ borderBottom: "1px dashed #574444" }}
                        onClick={() => setModal(true, thing)}
                    >
                        (Н){thing.name} (Состояние: {thing.duration})
                    </li>
                }
                else {
                    return <li
                        key={thing.id}
                        style={{ borderBottom: "1px dashed #574444" }}
                        onClick={() => setModal(true, thing)}
                    >
                        {thing.name} (Состояние: {thing.duration})
                    </li>
                }
            })}
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <span>
                <u>{thing.name}</u>
                <br />
                <span>Описание: {thing.description}</span>
                <br />
                <span>Добавляет здоровья: {thing.hp}</span>
                <br />
                <span>Добавляет маны: {thing.mana}</span>
                <br />
                <span>Добавляет урона: {thing.damage}</span>
                <br />
                <span>Добавляет защиты: {thing.defense}</span>
                <MainButton
                    name={"Надеть"}
                    doAction={() => props.putOnInventoryThing(thing.id)}
                />
                <MainButton
                    name={"Снять"}
                    doAction={() => props.takeOffInventoryThing(thing.id)}
                />
                <MainButton
                    name={"Выбросить"}
                    doAction={() => props.removeInventoryThing(thing.id)}
                />
            </span>
        </Modal>
    </>
    );
};

export default Inventory;
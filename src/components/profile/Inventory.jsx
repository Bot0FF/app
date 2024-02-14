import React, { useState } from 'react';
import Modal from '../../common/util/modal/Modal';
import { SortButton, InventoryButton } from '../../common/util/button/ProfileButton';

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

    //удалить вещь из инвентаря, закрыть модальное окно
    const removeThingFromDB = (isActive, thingId) => {
        setModalActive(isActive);
        props.removeThingFromDB(thingId);
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
        <ul className="content-inventory--item">
            {Array.from(props.things).map(thing => {
                if (thing.use === true) {
                    return <li
                        key={thing.id}
                        onClick={() => setModal(true, thing)}
                    >
                        (Н){thing.name} (Состояние: {thing.condition})
                    </li>
                }
                else {
                    return <li
                        key={thing.id}
                        onClick={() => setModal(true, thing)}
                    >
                        {thing.name} (Состояние: {thing.condition})
                    </li>
                }
            })}
        </ul>
        <Modal active={modalActive} setActive={setModalActive}>
            <div>
                <u>{thing.name}</u>
                <li>Описание: {thing.description}</li>
                <li>Добавляет здоровья: {thing.hp}</li>
                <li>Добавляет маны: {thing.mana}</li>
                <li>Добавляет физического урона: {thing.physDamage}</li>
                <li>Увеличение силы магии: {thing.magModifier}%</li>
                <li>Добавляет физической защиты: {thing.physDefense}</li>
                <li>Добавляет магической защиты: {thing.magDefense}</li>
                <li>Состояние: {thing.condition}/100</li>
                <InventoryButton
                    name={"Надеть"}
                    onClick={() => putOnInventoryThing(false, thing.id)}
                />
                <InventoryButton
                    name={"Снять"}
                    onClick={() => takeOffInventoryThing(false, thing.id)}
                />
                <InventoryButton
                    name={"Выбросить"}
                    onClick={() => removeInventoryThing(false, thing.id)}
                />
                {props.player.unitType === 'ADMIN'
                    ?
                    <InventoryButton
                        name={"Удалить из БД"}
                        onClick={() => removeThingFromDB(false, thing.id)}
                    />
                    :
                    <></>
                }
            </div>
        </Modal>
    </>
    );
};

export default Inventory;
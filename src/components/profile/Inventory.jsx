import React, { useState, useEffect } from 'react';
import Modal from '../../common/util/modal/Modal';
import { SortButton, InventoryButton } from '../../common/util/button/ProfileButton';

const Inventory = (props) => {
    const [thing, setThing] = useState({});
    const [unitThings, setUnitThings] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        setUnitThings(props.things)
    }, [props.things])

    //сортировка предметов по objectType
    const sortUnitThings = (sort) => {
        let sortThings = Array.from(props.things).filter(thing => (
            sort === true ? thing.use === sort : sort.includes(thing.objectType)
        ));
        setUnitThings(sortThings);
    }

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

    //удалить вещь из БД, закрыть модальное окно
    const removeThingFromDB = (isActive, thingId) => {
        setModalActive(isActive);
        props.removeThingFromDB(thingId);
    }

    return (<>
        <div className="profile-inventory-sort">
            <SortButton
                name={"Надето"}
                onClick={() => { sortUnitThings(true) }}
            />
            <SortButton
                name={"Оружие"}
                onClick={() => { sortUnitThings("WEAPON")}}
            />
            <SortButton
                name={"Броня"}
                onClick={() => { sortUnitThings("HEAD HAND BODY LEG")}}
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
        <UnitInventory
            things={unitThings}
            setModal={setModal}
        />
        <Modal active={modalActive} setActive={setModalActive}>
            <ModalThing
                player={props.player}
                thing={thing}
                putOnInventoryThing={putOnInventoryThing}
                takeOffInventoryThing={takeOffInventoryThing}
                removeInventoryThing={removeInventoryThing}
                removeThingFromDB={removeThingFromDB}
            />
        </Modal>
    </>
    );
};

//инвентарь unit
const UnitInventory = ({ things, setModal }) => {
    return <ul>
        {Array.from(things).map(thing => {
            if (thing.use === true) {
                return <li className="profile-inventory-item"
                    key={thing.id}
                    onClick={() => setModal(true, thing)}
                >
                    (Н){thing.name} (Состояние: {thing.condition})
                </li>
            }
            else {
                return <li className="profile-inventory-item"
                    key={thing.id}
                    onClick={() => setModal(true, thing)}
                >
                    {thing.name} (Состояние: {thing.condition})
                </li>
            }
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
            name={"Надеть"}
            onClick={() => props.putOnInventoryThing(false, props.thing.id)}
        />
        <InventoryButton
            name={"Снять"}
            onClick={() => props.takeOffInventoryThing(false, props.thing.id)}
        />
        <InventoryButton
            name={"Выбросить"}
            onClick={() => props.removeInventoryThing(false, props.thing.id)}
        />
        {props.player.unitType === 'ADMIN'
            ?
            <InventoryButton
                name={"Удалить из БД"}
                onClick={() => props.removeThingFromDB(false, props.thing.id)}
            />
            :
            <></>
        }
    </div>
}

export default Inventory;
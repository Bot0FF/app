import React from 'react';
import { SortButton } from '../../../common/util/button/ProfileButton';
import "./home.css";

const Take = () => {
    return (<>
        <div className="content-sort">
            <SortButton
                name={"Все"}
                onClick={() => {  }}
            />
            <SortButton
                name={"Оружие"}
                onClick={() => {  }}
            />
            <SortButton
                name={"Броня"}
                onClick={() => {  }}
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
    </>
    );
};

export default Take;
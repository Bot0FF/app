import React from 'react';

//установка новых имен сущностей
const SetEntityName = (props) => {
    let newEntityName = React.createRef();

    let setNewEntityName = newEntityName.current.value;

    return (
        <div>
            <a>Введите новое название</a>
            <textarea ref={newEntityName}></textarea>
        </div>
    );
};

export default SetEntityName;
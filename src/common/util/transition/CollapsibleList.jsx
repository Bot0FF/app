import React from 'react';
import { CSSTransition } from "react-transition-group";
import "./collapsibleList.css"

const CollapsibleList = (props) => {
    return (
        <div>
            <CSSTransition classNames="my-node" in={props.isOpen} timeout={200} unmountOnExit>
                <ul className="menu__list">
                    {props.entities?.map(entity =>
                        <div
                            className="menu__item"
                            key={entity.id}
                            onClick={() => props.setModal(true, entity)}
                        >
                            {entity.hp > 0
                                ?
                                <span>{entity.name} </span>
                                :
                                <span style={{color: "#744444"}}>{entity.name}</span>
                            }
                        </div>
                    )}
                </ul>
            </CSSTransition>
        </div>
    );
};

export default CollapsibleList;
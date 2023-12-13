import axios from 'axios';
import React from 'react';
import { API_URL } from '../../services/UrlService';

const Library = (props) => {

    if (props.entities.length === 0) {
        axios.get(API_URL + "/library/all").then(response => {
            props.setEntities(response.data.entities)
        });
    }

    return (
        <div>
            {
                props.entities.map(entity => <div key={entity.id}
                >
                    <span>
                        <span>
                            <div>{entity.name}</div>
                            <div>{entity.description}</div>
                        </span>
                    </span>
                    <span>
                        <div>
                            <img />
                        </div>
                        {entity.uncover
                            ? <button onClick={() => props.open(entity.id)}>Open</button>
                            : <button onClick={() => props.hide(entity.id)}>Hide</button>}
                    </span>
                </div>)
            }
        </div>
    );
};

export default Library;
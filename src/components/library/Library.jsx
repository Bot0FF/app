import React from "react";
import "./library.css";

const Library = (props) => {
    return (
        <div className="library-item">
            <div>
                <h3>Количество: {props.totalEntitiesCount}</h3>
            </div>
            {
                props.entities.map(entity =>
                    <div key={entity.id}>
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
                            <button onClick={() => props.onDownloadEntities(entity.type)}>Посмотреть</button>
                        </span>
                    </div>
                )}
        </div>
    );
};

export default Library;

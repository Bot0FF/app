const SET_ENTITIES = "SET_ENTITIES";
const SET_START_ENTITIES = "SET_START_ENTITIES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_ENTITIES_COUNT = "SET_TOTAL_ENTITIES_COUNT";

let startEntities = [
    { id: 1, name: "Существа", description: "Описание существ", type: "/api/library/enemy" },
    { id: 2, name: "Ресурсы", description: "Описание ресурсов", type: "/api/library/resource" },
    { id: 3, name: "Развитие", description: "Описание развития", type: "/api/library/evolution" },
]

let initialState = {
    entities: startEntities,
    pageSize: 5,
    totalEntitiesCount: startEntities.length,
    currentPage: 1
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setEntities = (entities) => ({ type: SET_ENTITIES, entities });
export const setStartEntities = () => ({ type: SET_START_ENTITIES, startEntities });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalEntitiesCount = (totalEntitiesCount) => ({ type: SET_TOTAL_ENTITIES_COUNT, totalEntitiesCount: totalEntitiesCount })

//через dispatch из контейнера в reducer передается action и обновляется state
const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ENTITIES:
            if(action.entities === null) {
                return { ...state, entities: startEntities, totalEntitiesCount: startEntities.length };
            }
            return { ...state, entities: action.entities };
        case SET_START_ENTITIES:
            return { ...state, entities: startEntities, totalEntitiesCount: startEntities.length };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_ENTITIES_COUNT:
            return { ...state, totalEntitiesCount: action.totalEntitiesCount };
        default:
            return state;
    };
};

export default libraryReducer;
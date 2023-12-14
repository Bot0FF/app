const SET_LIBRARY = "SET_LIBRARY";
const OPEN = "OPEN";
const HIDE = "HIDE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_ENTITIES_COUNT = "SET_TOTAL_ENTITIES_COUNT";

let initialState = {
    entities: [],
    pageSize: 5,
    totalEntitiesCount: 0,
    currentPage: 1
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setEntitiesAC = (entities) => ({ type: SET_LIBRARY, entities });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalEntitiesCountAC = (totalEntitiesCount) => ({ type: SET_TOTAL_ENTITIES_COUNT, totalEntitiesCount: totalEntitiesCount })
export const openAC = (id) => ({ type: OPEN, id });
export const hideAC = (id) => ({ type: HIDE, id });

//через dispatch из контейнера в reducer передается action и обновляется state
const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIBRARY:
            return { ...state, entities: [...action.entities] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_ENTITIES_COUNT:
            return { ...state, totalEntitiesCount: action.totalEntitiesCount };
        case OPEN:
            return {
                ...state,
                entities: state.entities.map(entity => {
                    if (entity.id === action.id) {
                        return { ...entity, uncover: false };
                    }
                    return entity;
                })
            }
        case HIDE:
            return {
                ...state,
                entities: state.entities.map(entity => {
                    if (entity.id === action.id) {
                        return { ...entity, uncover: true };
                    }
                    return entity;
                })
            }
        default:
            return state;
    };
};

export default libraryReducer;
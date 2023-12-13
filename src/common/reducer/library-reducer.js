const SET_LIBRARY = "SET_LIBRARY";
const OPEN = "OPEN";
const HIDE = "HIDE";

let initialState = {
    entities: []
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setEntitiesAC = (entities) => ({type: SET_LIBRARY, entities});
export const openAC = (id) => ({type: OPEN, id});
export const hideAC = (id) => ({type: HIDE, id});

//через dispatch из контейнера в reducer передается action и обновляется state
const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIBRARY:
            return {...state, entities: [...state.entities, ...action.entities]};
        case OPEN:
            return {
                ...state, 
                entities: state.entities.map(entity => {
                    if(entity.id === action.id) {
                        return {...entity, uncover: false};
                    }
                    return entity;
                })
            }
        case HIDE:
            return {
                ...state, 
                entities: state.entities.map(entity => {
                    if(entity.id === action.id) {
                        return {...entity, uncover: true};
                    }
                    return entity;
                })
            }
        default:
            return state;
    };
};

export default libraryReducer;
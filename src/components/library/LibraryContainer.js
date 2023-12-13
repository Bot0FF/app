import { connect } from "react-redux";
import Library from "./Library";
import { setEntitiesAC, openAC, hideAC } from "../../common/reducer/library-reducer";

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        entities: state.libraryPage.entities
    };
};

//передает callback в UI компонент
let mapDispatchToProps = (dispatch) => {
    return {
        setEntities: (entities) => {
            dispatch(setEntitiesAC(entities));
        },
        open: (id) => {
            dispatch(openAC(id));
        },
        hide: (id) => {
            dispatch(hideAC(id));
        }
    };
};

//коннектит props и dispatch к UI компоненту
const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(Library)

export default LibraryContainer;
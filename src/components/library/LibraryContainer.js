import Library from "./Library";
import { connect } from "react-redux";
import { setEntitiesAC, setCurrentPageAC, setTotalEntitiesCountAC, openAC, hideAC } from "../../common/reducer/library-reducer";

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        entities: state.libraryPage.entities,
        pageSize: state.libraryPage.pageSize,
        totalEntitiesCount: state.libraryPage.totalEntitiesCount,
        currentPage: state.libraryPage.currentPage
    };
};

//передает callback в UI компонент
let mapDispatchToProps = (dispatch) => {
    return {
        setEntities: (entities) => {
            dispatch(setEntitiesAC(entities));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalEntitiesCount: (totalEntitiesCount) => {
            dispatch(setTotalEntitiesCountAC(totalEntitiesCount));
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
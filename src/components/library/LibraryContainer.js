import React from "react";
import Library from "./Library";
import { connect } from "react-redux";
import { setEntities, setStartEntities, setCurrentPage, setTotalEntitiesCount } from "../../common/reducer/library-reducer";
import { API } from "../../api/api";

class LibraryContainer extends React.Component {

    componentDidMount() {
        this.props.setStartEntities();
    }

    onDownloadEntities = (type) => {
    API.getLibrary(type)
        .then(data => {
            if (data.status === "OK") {
                this.props.setEntities(data.libraries);
                this.props.setTotalEntitiesCount(data.content);
            }
        });
    }

    render() {
        return <>
            <Library
                entities={this.props.entities}
                totalEntitiesCount={this.props.totalEntitiesCount}
                onDownloadEntities={this.onDownloadEntities}/>
        </>
    };
};

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        entities: state.libraryPage.entities,
        pageSize: state.libraryPage.pageSize,
        totalEntitiesCount: state.libraryPage.totalEntitiesCount,
        currentPage: state.libraryPage.currentPage
    };
};

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    setEntities,
    setStartEntities,
    setCurrentPage,
    setTotalEntitiesCount
})(LibraryContainer);

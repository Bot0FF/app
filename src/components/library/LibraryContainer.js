import React from "react";
import Library from "./Library";
import axios from "axios";
import { connect } from "react-redux";
import { setEntities, setStartEntities, setCurrentPage, setTotalEntitiesCount } from "../../common/reducer/library-reducer";
import { API_URL } from './../../services/UrlService';

class LibraryContainer extends React.Component {

    componentDidMount() {
        this.props.setStartEntities();
    }

    onDownloadEntities = (type) => {
        axios.get(API_URL + type).then(response => {
            this.props.setEntities(response.data.libraries);
            this.props.setTotalEntitiesCount(response.data.content);
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

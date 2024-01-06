import React from "react";
import Library from "./Library";
import { connect } from "react-redux";
import { setStartEntities, downloadEntities } from "../../common/reducer/library-reducer";
import { withAuthRedirect } from './../../common/hoc/withAuthRedirect';

class LibraryContainer extends React.Component {

    componentDidMount() {
        this.props.setStartEntities();
    }

    onDownloadEntities = (type) => {
        this.props.downloadEntities(type);
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
        currentPage: state.libraryPage.currentPage,
        isAuth: state.mainState.isAuth
    };
};

let WithDataLibraryContainer = withAuthRedirect(LibraryContainer);

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    downloadEntities,
    setStartEntities
})(WithDataLibraryContainer);

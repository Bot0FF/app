import React from "react";
import axios from "axios";
import Main from "./Main";
import { API_URL } from '../../services/UrlService';
import { connect } from "react-redux";
import { setStateAC, setMoveUpAC, setMoveLeftAC, setMoveRightAC, setMoveDownAC, toogleIsFetchingAC } from "../../common/reducer/main-reducer";
import { Preloader } from "../../common/preloader/Preloader";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(API_URL + "/api/im/main").then(response => {
            this.props.toogleIsFetching(false);
            this.props.setState(response.data);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Main props={this.props} />
        </>
    }
};

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        player: state.mainPage.player,
        enemies: state.mainPage.enemies,
        players: state.mainPage.players,
        content: state.mainPage.content,
        isFetching: state.mainPage.isFetching
    };
};

//передает callback в UI компонент
let mapDispatchToProps = (dispatch) => {
    return {
        setState: (state) => {
            dispatch(setStateAC(state));
        },
        setMoveUp: () => {
            dispatch(setMoveUpAC());
        },
        setMoveLeft: () => {
            dispatch(setMoveLeftAC());
        },
        setMoveRight: () => {
            dispatch(setMoveRightAC());
        },
        setMoveDown: () => {
            dispatch(setMoveDownAC());
        },
        toogleIsFetching: (isFetching) => {
            dispatch(toogleIsFetchingAC(isFetching));
        }
    }
}

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

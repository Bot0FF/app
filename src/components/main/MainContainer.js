import React from "react";
import axios from "axios";
import Main from "./Main";
import { API_URL } from '../../services/UrlService';
import { connect } from "react-redux";
import { setState } from "../../common/reducer/main-reducer";

class MainContainer extends React.Component {

    componentDidMount() {
        axios
            .get(API_URL + "/api/main/im", { withCredentials: true })
            .then(response => {
                this.props.setState(response.data);
            })
    }

    onMovePlayer = (direction) => {
        axios
            .get(API_URL + "/api/main/move/" + direction, { withCredentials: true })
            .then(response => {
                this.props.setState(response.data);
            });
    }

    render() {
        return <>
            <Main
                content={this.props.content}
                player={this.props.player}
                onMovePlayer={this.onMovePlayer}
            />
        </>
    };
};

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        player: state.mainState.player,
        enemies: state.mainState.enemies,
        players: state.mainState.players,
        content: state.mainState.content,
    };
};

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    setState
})(MainContainer);

import React from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { getMain, movePlayer } from "../../common/reducer/main-reducer";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.getMain();
    }

    onMovePlayer = (direction) => {
        this.props.movePlayer(direction);
    }

    render() {
        return <>
            <Main
                isHandling={this.props.isHandling}
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
        isHandling: state.mainState.isHandling
    };
};

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    getMain,
    movePlayer
})(MainContainer);

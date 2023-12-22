import React from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { setState, setIsHandling } from "../../common/reducer/main-reducer";
import { API } from "../../api/api";

class MainContainer extends React.Component {

    componentDidMount() {
        API.getMain()
            .then(data => {
                if (data.status === "OK") {
                    this.props.setState(data);
                }
            })
    }

    onMovePlayer = (direction) => {
        this.props.setIsHandling(true);
        API.getMove(direction)
            .then(data => {
                if (data.status === "OK") {
                    this.props.setState(data);
                }
                this.props.setIsHandling(false);
            });
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
    setState,
    setIsHandling
})(MainContainer);

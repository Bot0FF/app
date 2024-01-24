import React from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { getMain, movePlayer } from "../../common/reducer/main-reducer";
import { setFight } from "../../common/reducer/fight-reducer";
import { withAuthRedirect } from './../../common/hoc/withAuthRedirect';
import { Preloader } from "../../common/preloader/Preloader";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.getMain();
    }

    onMovePlayer = (direction) => {
        this.props.movePlayer(direction);
    }

    setFight = (targetId) => {
        this.props.setFight(targetId);
    }

    render() {
        if(this.props.status === 0) {
            return <Preloader />
        }
        return <>
            <Main
                locationName={this.props.location.name}
                x={this.props.location.x}
                y={this.props.location.y}
                player={this.props.player}
                enemies={this.props.enemies}
                players={this.props.players}
                info={this.props.info}
                onMovePlayer={this.onMovePlayer}
                setFight={this.setFight}
            />
        </>
    };
};

let mapStateToProps = (state) => {
    return {
        player: state.mainState.player,
        location: state.mainState.location,
        enemies: state.mainState.enemies,
        players: state.mainState.players,
        info: state.mainState.info,
        status: state.mainState.status,
        isAuth: state.authState.isAuth
    };
};

let WithDataMainContainer = withAuthRedirect(MainContainer);

export default connect(mapStateToProps, {
    getMain,
    movePlayer,
    setFight
})(WithDataMainContainer);

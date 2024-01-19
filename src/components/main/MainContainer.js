import React from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { getMain, movePlayer, setFightState } from "../../common/reducer/main-reducer";
import { withAuthRedirect } from './../../common/hoc/withAuthRedirect';

class MainContainer extends React.Component {

    getEnemies = (units) => {
        let enemies = [];
        units.forEach(unit => unit.name.startsWith('*') ? enemies.push(unit) : null);
        return enemies;
    }

    getPlayers = (units) => {
        let players = [];
        units.forEach(unit => !unit.name.startsWith('*') ? players.push(unit) : null);
        return players;
    }

    onMovePlayer = (direction) => {
        this.props.movePlayer(direction);
    }

    setFightState = (targetId) => {
        this.props.setFightState(targetId);
    } 

    render() {
        return <>
            <Main
                locationName={this.props.location.name}
                x={this.props.location.x}
                y={this.props.location.y}
                player={this.props.player}
                enemies={this.getEnemies(this.props.location.units)}
                players={this.getPlayers(this.props.location.units)}
                onMovePlayer={this.onMovePlayer}
                setFightState={this.setFightState}
            />
        </>
    };
};


//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        player: state.mainState.player,
        location: state.mainState.location,
        info: state.mainState.info,
        isAuth: state.mainState.isAuth
    };
};

let WithDataMainContainer = withAuthRedirect(MainContainer);

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    getMain,
    movePlayer, 
    setFightState
})(WithDataMainContainer);

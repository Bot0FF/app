import React from "react";
import Fight from "./Fight";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../common/hoc/withAuthRedirect';
import {
    loadRound,
    setHitWeapon,
    setHitAbility,
    setMove
} from "../../common/reducer/fight-reducer";
import { Preloader } from './../../common/preloader/Preloader';

class FightContainer extends React.Component {

    componentDidMount() {
        this.props.loadRound();
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader />
        }
        return <>
            <Fight
                player={this.props.player}
                teamOne={this.props.teamOne}
                teamTwo={this.props.teamTwo}
                resultRound={this.props.resultRound}
                ability={this.props.ability}
                countRound={this.props.countRound}
                endRoundTimer={this.props.endRoundTimer}
                info={this.props.info}
                loadRound={this.props.loadRound}
                setMove={this.props.setMove}
                setHitWeapon={this.props.setHitWeapon}
                setHitAbility={this.props.setHitAbility}
            />
        </>
    };
};

let mapStateToProps = (state) => {
    return {
        player: state.fightState.player,
        teamOne: state.fightState.teamOne,
        teamTwo: state.fightState.teamTwo,
        resultRound: state.fightState.resultRound,
        ability: state.fightState.ability,
        countRound: state.fightState.countRound,
        endRoundTimer: state.fightState.endRoundTimer,
        info: state.fightState.info,
        status: state.fightState.status,
        initialize: state.fightState.initialize,
        isAuth: state.authState.isAuth
    };
};

let WithDataFightContainer = withAuthRedirect(FightContainer);

export default connect(mapStateToProps, {
    loadRound,
    setMove,
    setHitWeapon,
    setHitAbility
})(WithDataFightContainer);


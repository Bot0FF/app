import React from "react";
import Fight from "./Fight";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../common/hoc/withAuthRedirect';
import {
    getFightState,
    setHitWeapon,
    setMove,
    setActionEnd
} from "../../common/reducer/fight-reducer";

class FightContainer extends React.Component {

    componentDidMount() {
        this.props.getFightState();
    }

    render() {
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
                getFightState={this.props.getFightState}
                setMove={this.props.setMove}
                setHitWeapon={this.props.setHitWeapon}
                setHitAbility={this.props.setHitAbility}
                setActionEnd={this.props.setActionEnd}
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
    getFightState,
    setMove,
    setHitWeapon,
    setActionEnd
})(WithDataFightContainer);


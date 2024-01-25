import React from "react";
import Fight from "./Fight";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../common/hoc/withAuthRedirect';
import { refreshFightState, setCurrentHit, getAbility } from "../../common/reducer/fight-reducer";
import { Preloader } from './../../common/preloader/Preloader';
import _ from "underscore";

class FightContainer extends React.Component {

    componentDidMount() {
        if(_.isEmpty(this.props.player)) {
            this.props.refreshFightState();
        }
    }

    setHit = (abilityId, targetId) => {
        this.props.setCurrentHit(abilityId, targetId);
    }

    refreshFight = () => {
        this.props.refreshFightState();
    }

    getAbility = () => {
        this.props.getAbility();
    }

    render() {
        if(this.props.status === 0) {
            return <Preloader />
        }
        return <>
            <div>
                <Fight
                    player={this.props.player}
                    fight={this.props.fight}
                    teamOne={this.props.teamOne}
                    teamTwo={this.props.teamTwo}
                    resultRound={this.props.resultRound}
                    info={this.props.info}
                    refreshFight={this.refreshFight}
                    setHit={this.setHit}
                    ability={this.props.ability}
                    getAbility={this.getAbility}
                />
            </div>
        </>
    };
};

let mapStateToProps = (state) => {
    return {
        player: state.fightState.player,
        fight: state.fightState.fight,
        teamOne: state.fightState.teamOne,
        teamTwo: state.fightState.teamTwo,
        resultRound: state.fightState.resultRound,
        ability: state.fightState.ability,
        info: state.fightState.info,
        status: state.fightState.status,
        isAuth: state.authState.isAuth
    };
};

let WithDataFightContainer = withAuthRedirect(FightContainer);

export default connect(mapStateToProps, {
    refreshFightState,
    setCurrentHit,
    getAbility
})(WithDataFightContainer);


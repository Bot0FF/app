import React from "react";
import Fight from "./Fight";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../common/hoc/withAuthRedirect';
import { loadRound, setCurrentHit } from "../../common/reducer/fight-reducer";
import { Preloader } from './../../common/preloader/Preloader';
import _ from "underscore";

class FightContainer extends React.Component {

    componentDidMount() {
        this.props.loadRound();
    }
    
    setHit = (abilityId, targetId) => {
        this.props.setCurrentHit(abilityId, targetId);
    }

    render() {
        if (!this.props.initialize) {
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
                    loadRound={() => this.props.loadRound()}
                    setHit={this.setHit}
                    ability={this.props.ability}
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
        initialize: state.fightState.initialize,
        isAuth: state.authState.isAuth
    };
};

let WithDataFightContainer = withAuthRedirect(FightContainer);

export default connect(mapStateToProps, {
    loadRound,
    setCurrentHit
})(WithDataFightContainer);


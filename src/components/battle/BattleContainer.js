import React, { useEffect } from "react";
import Battle from "./Battle";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRefreshFightState, setCurrentHit } from "../../common/reducer/battle-reducer";
import { Preloader } from './../../common/preloader/Preloader';

const BattleContainer = () => {
    const state = useSelector((state) => state.battleState);
    const dispatch = useDispatch();

    console.log(state)

    useEffect(() => {
        dispatch(setRefreshFightState());
    }, []);

    let setHit = (abilityId, targetId) => {
        dispatch(setCurrentHit(abilityId, targetId));
    }

    let refreshFightState = () => {
        dispatch(setRefreshFightState());
    }

    if (state.status == 0) {
        return <Navigate replace to="/im" />
    }

    return (
        state.status == -1
            ?
            <Preloader />
            :
            <div>
                <Battle
                    player={state.player}
                    teamOne={state.teamOne}
                    teamTwo={state.teamTwo}
                    countRound={state.fight.countRound}
                    resultRound={state.fight.resultRound}
                    timeToEndRound={state.fight.timeToEndRound}
                    refreshFightState={refreshFightState}
                    setHit={setHit}
                    info={state.info}
                />
            </div>
    );
};

export default BattleContainer;


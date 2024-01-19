import React, { useEffect } from "react";
import Battle from "./Battle";
import { useSelector, useDispatch } from "react-redux";
import { setRefreshFightState } from "../../common/reducer/main-reducer";

const BattleContainer = () => {
    const state = useSelector((state) => state.mainState);
    const dispatch = useDispatch();

    useEffect(() => {
        if(state.fight == null) {
            dispatch(setRefreshFightState())
        }
    }, [state]);

    return (
        <div>
            <Battle
                player={state.player}
                fight={state.fight}
                info={state.info}

            />
        </div>
    );
};

export default BattleContainer;


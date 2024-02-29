import React from "react";
import Main from "./Main";
import { connect } from "react-redux";
import {
    getMain,
    getLocationAis,
    getLocationUnits,
    getLocationThings,
    movePlayer,
    moveToLocality,
    setFight,
    takeLocationThing
} from "../../common/reducer/main-reducer";
import { withAuthRedirect } from './../../common/hoc/withAuthRedirect';
import { Navigate } from "react-router-dom";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.getMain();
    }

    render() {
        if (this.props.player?.status === "FIGHT") {
            return <Navigate replace to="/fight" />
        }
        return <>
            <Main
                player={this.props.player}
                location={this.props.location}
                ais={this.props.ais}
                units={this.props.units}
                things={this.props.things}
                info={this.props.info}
                aisSize={this.props.aisSize}
                getLocationAis={this.props.getLocationAis}
                unitsSize={this.props.unitsSize}
                getLocationUnits={this.props.getLocationUnits}
                thingsSize={this.props.thingsSize}
                getLocationThings={this.props.getLocationThings}
                doorId={this.props.location.doorId}
                movePlayer={this.props.movePlayer}
                moveToLocality={this.props.moveToLocality}
                setFight={this.props.setFight}
                takeLocationThing={this.props.takeLocationThing}
            />
        </>
    };
};

let mapStateToProps = (state) => {
    return {
        player: state.mainState.player,
        location: state.mainState.location,
        aisSize: state.mainState.aisSize,
        ais: state.mainState.ais,
        unitsSize: state.mainState.unitsSize,
        units: state.mainState.units,
        thingsSize: state.mainState.thingsSize,
        things: state.mainState.things,
        info: state.mainState.info,
        status: state.mainState.status,
        isAuth: state.authState.isAuth
    };
};

export default connect(mapStateToProps, {
    getMain,
    getLocationAis,
    getLocationUnits,
    getLocationThings,
    movePlayer,
    moveToLocality,
    setFight,
    takeLocationThing
})(withAuthRedirect(MainContainer));

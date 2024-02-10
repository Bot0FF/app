import React from 'react';
import MainButton from '../../common/util/button/MainButton';
import Player from './Player';
import Inventory from './Inventory';
import Point from './Point';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
    getProfile,
    getThings,
    removeInventoryThing,
    putOnInventoryThing,
    takeOffInventoryThing
} from '../../common/reducer/profile-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../common/hoc/withAuthRedirect';
import { Navigate } from 'react-router-dom';
import './profile.css';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        if (this.props.player?.status === "FIGHT") {
            return <Navigate replace to="/fight" />
        }
        return <>
            <div className="parent-content--profile">
                <div className="profile--button">
                    <NavLink to="">
                        <MainButton
                            name={"Игрок"}
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    <NavLink to="inventory">
                        <MainButton
                            name={"Инвентарь"}
                            onClick={() => { }}
                        />
                    </NavLink>
                    <NavLink to="attribute">
                        <MainButton
                            name={"Характеристики"}
                            onClick={() => { }}
                        />
                    </NavLink>
                    <NavLink to="skill">
                        <MainButton
                            name={"Навыки"}
                            onClick={() => { }}
                        />
                    </NavLink>
                    <NavLink to="ability">
                        <MainButton
                            name={"Умения"}
                            onClick={() => { }}
                        />
                    </NavLink>
                </div>
                <div className="profile--content">
                    <Routes>
                        <Route
                            path=""
                            element={<Player
                                player={this.props.player}
                            />}
                        />
                        <Route
                            path="/inventory"
                            element={<Inventory
                                player={this.props.player}
                                info={this.props.info}
                                things={this.props.things}
                                getThings={this.props.getThings}
                                putOnInventoryThing={this.props.putOnInventoryThing}
                                takeOffInventoryThing={this.props.takeOffInventoryThing}
                                removeInventoryThing={this.props.removeInventoryThing}
                            />}
                        />
                        <Route
                            path="point"
                            element={<Point
                                player={this.props.player}
                            />}
                        />
                    </Routes>
                </div>
            </div>
        </>
    };
};

let mapStateToProps = (state) => {
    return {
        player: state.profileState.player,
        things: state.profileState.things,
        info: state.profileState.info,
        status: state.profileState.status,
        isAuth: state.authState.isAuth
    };
};

export default connect(mapStateToProps, {
    getProfile,
    getThings,
    removeInventoryThing,
    putOnInventoryThing,
    takeOffInventoryThing
})(withAuthRedirect(ProfileContainer));
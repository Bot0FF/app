import React from "react";
import MainButton from './../../common/util/Button/MainButton';
import Player from "./Player";
import Inventory from './Inventory';
import { NavLink, Route, Routes } from "react-router-dom";
import {
    getProfile,
    getThings
} from "../../common/reducer/profile-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from './../../common/hoc/withAuthRedirect';
import { Navigate } from "react-router-dom";
import "./profile.css";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        if (this.props.player?.status === "FIGHT") {
            return <Navigate replace to="/fight" />
        }
        return <>
            <div className="header">
                <div className="parent-content--profile">
                    <div className="profile--button">
                        <NavLink to="">
                            <MainButton
                                name={"Игрок"}
                            />
                        </NavLink>
                        <NavLink to="inventory">
                            <MainButton
                                name={"Инвентарь"}
                                getData={this.props.getThings}
                            />
                        </NavLink>
                        <NavLink to="ability">
                            <MainButton
                                name={"Умения"}
                            />
                        </NavLink>
                        <NavLink to="skill">
                            <MainButton
                                name={"Навыки"}
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
                                    things={this.props.things}
                                />}
                            />
                        </Routes>
                    </div>
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
    getThings
})(withAuthRedirect(ProfileContainer));
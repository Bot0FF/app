import React from 'react';
import MainButton from '../../common/util/button/MainButton';
import Player from './Player';
import Inventory from './Inventory';
import Attribute from './Attribute';
import Skill from './Skill';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
    getProfile,
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
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    <NavLink to="attribute">
                        <MainButton
                            name={"Характеристики"}
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    <NavLink to="skill">
                        <MainButton
                            name={"Навыки"}
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    <NavLink to="ability">
                        <MainButton
                            name={"Умения"}
                            onClick={() => this.props.getProfile()}
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
                                putOnInventoryThing={this.props.putOnInventoryThing}
                                takeOffInventoryThing={this.props.takeOffInventoryThing}
                                removeInventoryThing={this.props.removeInventoryThing}
                            />}
                        />
                        <Route
                            path="attribute"
                            element={<Attribute
                                player={this.props.player}
                            />}
                        />
                        <Route
                            path="skill"
                            element={<Skill
                                unitSkill={this.props.unitSkill}
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
        unitSkill: state.profileState.unitSkill,
        things: state.profileState.things,
        info: state.profileState.info,
        status: state.profileState.status,
        isAuth: state.authState.isAuth
    };
};

export default connect(mapStateToProps, {
    getProfile,
    removeInventoryThing,
    putOnInventoryThing,
    takeOffInventoryThing
})(withAuthRedirect(ProfileContainer));
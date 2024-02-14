import React from 'react';
import { MenuButton } from '../../common/util/button/ProfileButton';
import Player from './Player';
import Inventory from './Inventory';
import Attribute from './Attribute';
import Skill from './Skill';
import Special from './Special';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
    getProfile,
    removeInventoryThing,
    putOnInventoryThing,
    takeOffInventoryThing,
    addThingToInventory,
    removeThingFromDB
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
                        <MenuButton
                            name={"Игрок"}
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    <NavLink to="inventory">
                        <MenuButton
                            name={"Инвентарь"}
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    <NavLink to="attribute">
                        <MenuButton
                            name={"Характеристики"}
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    <NavLink to="skill">
                        <MenuButton
                            name={"Навыки"}
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    <NavLink to="ability">
                        <MenuButton
                            name={"Умения"}
                            onClick={() => this.props.getProfile()}
                        />
                    </NavLink>
                    {this.props.player.unitType === "ADMIN"
                        ?
                        <NavLink to="special">
                            <MenuButton
                                name={"Secial"}
                                onClick={() => { this.props.getProfile() }}
                            />
                        </NavLink>
                        :
                        <></>
                    }
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
                                removeThingFromDB={this.props.removeThingFromDB}
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
                        <Route
                            path="special"
                            element={<Special
                                info={this.props.info}
                                addThingToInventory={this.props.addThingToInventory}
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
    takeOffInventoryThing,
    addThingToInventory,
    removeThingFromDB
})(withAuthRedirect(ProfileContainer));
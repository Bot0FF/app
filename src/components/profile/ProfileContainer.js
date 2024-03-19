import React from 'react';
import Player from './Player';
import Inventory from './Inventory';
import Attribute from './Attribute';
import Skill from './Skill';
import Special from './Special';
import Characteristic from './Characteristic';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
    getProfile,
    getUnitInventory,
    removeInventoryThing,
    putOnInventoryThing,
    takeOffInventoryThing,
    addThingToInventory,
    setUpAttribute,
    setDownAttribute,
    getAllAbilities,
    addCurrentUnitAbility,
    removeCurrentUnitAbility,
    removeThingFromDB
} from '../../common/reducer/profile-reducer';
import { MenuButton } from '../../common/util/button/ProfileButton';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../common/hoc/withAuthRedirect';
import { Navigate } from 'react-router-dom';
import './profile.css';
import Ability from './Ability';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        if (this.props.player?.status === "FIGHT") {
            return <Navigate replace to="/fight" />
        }
        return <>
            <div className="profile-container">
                {this.props.player.bonusPoint
                    ?
                    <div className="profile-bonus-attribute">
                        <Attribute
                            player={this.props.player}
                            setUpAttribute={this.props.setUpAttribute}
                            setDownAttribute={this.props.setDownAttribute}
                        ></Attribute>
                    </div>
                    :
                    <></>
                }
                <div className="profile-main-content">
                    <div className="profile-main-button">
                        <NavLink to="">
                            <MenuButton
                                name={"Игрок"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="inventory">
                            <MenuButton
                                name={"Инвентарь"}
                                onClick={() => this.props.getUnitInventory()}
                            />
                        </NavLink>
                        <NavLink to="characteristic">
                            <MenuButton
                                name={"Характеристики"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="skill">
                            <MenuButton
                                name={"Навыки"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="ability">
                            <MenuButton
                                name={"Умения"}
                                onClick={() => this.props.getAllAbilities()}
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
                    <div className="profile-content-info">
                        <Routes>
                            <Route
                                path=""
                                element={<Player
                                    player={this.props.player}
                                />}
                            />
                            <Route
                                path="inventory"
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
                                path="characteristic"
                                element={<Characteristic
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
                                path="ability"
                                element={<Ability
                                    player={this.props.player}
                                    abilities={this.props.abilities}
                                    addCurrentUnitAbility={this.props.addCurrentUnitAbility}
                                    removeCurrentUnitAbility={this.props.removeCurrentUnitAbility}
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
            </div>
        </>
    };
};

let mapStateToProps = (state) => {
    return {
        player: state.profileState.player,
        unitSkill: state.profileState.unitSkill,
        things: state.profileState.things,
        abilities: state.profileState.abilities,
        info: state.profileState.info,
        status: state.profileState.status,
        isAuth: state.authState.isAuth
    };
};

export default connect(mapStateToProps, {
    getProfile,
    getUnitInventory,
    removeInventoryThing,
    putOnInventoryThing,
    takeOffInventoryThing,
    addThingToInventory,
    setUpAttribute,
    setDownAttribute,
    getAllAbilities,
    addCurrentUnitAbility,
    removeCurrentUnitAbility,
    removeThingFromDB
})(withAuthRedirect(ProfileContainer));
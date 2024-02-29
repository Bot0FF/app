import React from 'react';
import Church from './Church';
import { NavLink, Route, Routes } from "react-router-dom";
import { MenuButton } from '../../../common/util/button/ProfileButton';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../common/hoc/withAuthRedirect';
import { getProfile } from '../../../common/reducer/profile-reducer';
import './church.css';

class ChurchContainer extends React.Component {

    render() {
        return <>
            <div className="parent-content--church">
                <div className="content-church--main">
                    <div className="church--button">
                        <NavLink to="">
                            <MenuButton
                                name={"Святилище"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="baff">
                            <MenuButton
                                name={"Баффы"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="pers1">
                            <MenuButton
                                name={"Персонаж 1"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="pers2">
                            <MenuButton
                                name={"Персонаж 2"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="pers3">
                            <MenuButton
                                name={"Персонаж 3"}
                                onClick={() => { }}
                            />
                        </NavLink>
                    </div>
                    <div className="church--content">
                        <Routes>
                            <Route
                                path=""
                                element={<Church/>}
                            />
                            <Route
                                path="inventory"
                            />
                            <Route
                                path="characteristic"
                            />
                            <Route
                                path="skill"
                            />
                            <Route
                                path="ability"
                            />
                            <Route
                                path="special"
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
        info: state.profileState.info,
        status: state.profileState.status,
        isAuth: state.authState.isAuth
    };
};

export default connect(mapStateToProps, {
    getProfile
})(withAuthRedirect(ChurchContainer));
import React from 'react';
import Home from './Home';
import { NavLink, Route, Routes } from "react-router-dom";
import { MenuButton } from '../../../common/util/button/ProfileButton';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../common/hoc/withAuthRedirect';
import { getProfile } from '../../../common/reducer/profile-reducer';
import './home.css';

class HomeContainer extends React.Component {

    render() {
        return <>
            <div className="parent-content--home">
                <div className="home--button">
                    <NavLink to="">
                        <MenuButton
                            name={"Дом"}
                            onClick={() => { }}
                        />
                    </NavLink>
                    <NavLink to="warehouse">
                        <MenuButton
                            name={"Склад"}
                            onClick={() => { }}
                        />
                    </NavLink>
                    <NavLink to="workshop">
                        <MenuButton
                            name={"Мастерская"}
                            onClick={() => { }}
                        />
                    </NavLink>
                </div>
                <div className="home--content">
                    <Routes>
                        <Route
                            path=""
                            element={<Home />}
                        />
                        <Route
                            path="warehouse"
                        />
                        <Route
                            path="workshop"
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
        info: state.profileState.info,
        status: state.profileState.status,
        isAuth: state.authState.isAuth
    };
};

export default connect(mapStateToProps, {
    getProfile
})(withAuthRedirect(HomeContainer));
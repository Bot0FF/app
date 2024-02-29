import React from 'react';
import Shop from './Shop';
import { NavLink, Route, Routes } from "react-router-dom";
import { MenuButton } from '../../../common/util/button/ProfileButton';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../common/hoc/withAuthRedirect';
import { getProfile } from '../../../common/reducer/profile-reducer';
import './shop.css';

class ShopContainer extends React.Component {

    render() {
        return <>
            <div className="parent-content--shop">
                <div className="content-shop--main">
                    <div className="shop--button">
                        <NavLink to="">
                            <MenuButton
                                name={"Магазин"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="bye">
                            <MenuButton
                                name={"Купить"}
                                onClick={() => { }}
                            />
                        </NavLink>
                        <NavLink to="sell">
                            <MenuButton
                                name={"Продать"}
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
                    <div className="shop--content">
                        <Routes>
                            <Route
                                path=""
                                element={<Shop/>}
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
})(withAuthRedirect(ShopContainer));
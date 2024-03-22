import React from 'react';
import Home from './Home';
import Keep from './Keep';
import Take from './Take';
import { NavLink, Route, Routes } from "react-router-dom";
import { MenuButton } from '../../../common/util/button/ProfileButton';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../common/hoc/withAuthRedirect';
import {
    getUnitInventory,
    keepHomeThing,
    takeHomeThing
} from '../../../common/reducer/home-reducer';
import './home.css';

class HomeContainer extends React.Component {

    render() {
        return <>
            <div className="home-container">
                <div className="home-main-button">
                    <NavLink to="">
                        <MenuButton
                            name={"Дом"}
                            onClick={() => { }}
                        />
                    </NavLink>
                    <NavLink to="keep">
                        <MenuButton
                            name={"Оставить"}
                            onClick={() => { }}
                        />
                    </NavLink>
                    <NavLink to="take">
                        <MenuButton
                            name={"Забрать"}
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
                <div className="home-main-content">
                    <Routes>
                        <Route
                            path=""
                            element={<Home
                                getUnitInventory={this.props.getUnitInventory}
                            />}
                        />
                        <Route
                            path="keep"
                            element={<Keep 
                                player={this.props.player}
                                thingsUnit={this.props.thingsUnit}
                                getUnitInventory={this.props.getUnitInventory}
                                keepHomeThing={this.props.keppHomeThing}
                            />}
                        />
                        <Route
                            path="take"
                            element={<Take 
                                player={this.props.player}
                                thingsHome={this.props.thingsHome}
                                getUnitInventory={this.props.getUnitInventory}
                                takeHomeThing={this.props.takeHomeThing}
                            />}
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
        player: state.homeState.player,
        thingsUnit: state.homeState.thingsUnit,
        thingsHome: state.homeState.thingsHome,
        info: state.homeState.info,
        status: state.homeState.status,
        isAuth: state.authState.isAuth
    };
};

export default connect(mapStateToProps, {
    getUnitInventory,
    keepHomeThing,
    takeHomeThing
})(withAuthRedirect(HomeContainer));
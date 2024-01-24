import React from "react";
import Greeting from './Greeting';
import { connect } from "react-redux";
import { getGreeting } from "../../common/reducer/greeting-reducer";
import { Navigate } from "react-router-dom";

class GreetingContainer extends React.Component {

    componentDidMount() {
        this.props.getGreeting();
    }

    render() {
        return <>
            {
            this.props.isAuth
            ?
            <Navigate replace to="/im"/>
            :
            this.props.news.map(item =>
                <Greeting
                    key={item.id}
                    imgLink={item.imgLink}
                    description={item.description}
                />
            )
            }
        </>
    };
};

let mapStateToProps = (state) => {
    return {
        news: state.greetingPage.news,
        isAuth: state.authState.isAuth
    };
};

export default connect(mapStateToProps, {
    getGreeting
})(GreetingContainer);
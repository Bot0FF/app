import React from "react";
import Greeting from './Greeting';
import { connect } from "react-redux";
import { getGreeting } from "../../common/reducer/greeting-reducer";
import { Navigate } from "react-router-dom";

class GreetingContainer extends React.Component {

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

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        isAuth: state.mainState.isAuth,
        news: state.greetingPage.news
    };
};

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    getGreeting
})(GreetingContainer);
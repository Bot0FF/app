import React from "react";
import Greeting from './Greeting';
import MainContainer from "../main/MainContainer";
import { connect } from "react-redux";
import { getGreeting } from "../../common/reducer/greeting-reducer";

class GreetingContainer extends React.Component {

    componentDidMount() {
        this.props.getGreeting();
    }

    render() {
        return <>
            {this.props.isAuth
                ?
                <MainContainer
                    player={this.props.state}
                />
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
        state: state.mainState,
        isAuth: state.greetingPage.isAuth,
        news: state.greetingPage.news
    };
};

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    getGreeting
})(GreetingContainer);
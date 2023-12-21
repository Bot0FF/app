import React from "react";
import Greeting from './Greeting';
import axios from "axios";
import MainContainer from "../main/MainContainer";
import { connect } from "react-redux";
import { setNews, setIsAuth } from "../../common/reducer/greeting-reducer";
import { setAuthUserData } from "../../common/reducer/auth-reducer";
import { API_URL } from './../../services/UrlService';

class GreetingContainer extends React.Component {

    componentDidMount() {
        axios
            .get(API_URL + "/api/main/im", { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    this.props.setAuthUserData(response.data.player);
                    this.props.setIsAuth(true);
                }
            })
            .catch(error => {
                this.props.setNews();
                this.props.setIsAuth(false);
            })
    }

    render() {
        return <>
            {this.props.isAuth
                ?
                <MainContainer
                    player={this.props.player}
                />
                :
                <Greeting 
                    link={this.props.news.link}
                    description={this.props.news.description}
                />
            }
        </>
    };
};

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        player: state.auth.player,
        isAuth: state.greetingPage.isAuth,
        news: state.greetingPage.news
    };
};

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    setNews,
    setIsAuth,
    setAuthUserData
})(GreetingContainer);
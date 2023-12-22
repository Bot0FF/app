import React from "react";
import Greeting from './Greeting';
import axios from "axios";
import MainContainer from "../main/MainContainer";
import { connect } from "react-redux";
import { setNews, setIsAuth } from "../../common/reducer/greeting-reducer";
import { setState } from "../../common/reducer/main-reducer";
import { API_URL } from './../../services/UrlService';

class GreetingContainer extends React.Component {

    componentDidMount() {
        axios
            .get(API_URL + "/api/main/im", { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    this.props.setState(response.data);
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
    setNews,
    setIsAuth,
    setState
})(GreetingContainer);
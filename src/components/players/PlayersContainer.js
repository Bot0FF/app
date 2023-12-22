import React from "react";
import axios from "axios";
import Players from "./Players";
import { API_URL } from '../../services/UrlService';
import { connect } from "react-redux";
import { setState, setPlayerProfile } from "../../common/reducer/players-reducer";
import Profile from "./Profile";

class PlayersContainer extends React.Component {

    componentDidMount() {
        axios
            .get(API_URL + "/api/main/players", { withCredentials: true })
            .then(response => {
                this.props.setState(response.data);
            });
    }

    onSetPlayerProfile = (name) => {
        axios
            .get(API_URL + "/api/main/profile/" + name, { withCredentials: true })
            .then(response => {
                this.props.setPlayerProfile(response.data.player);
            });
    }

    render() {
        return <>
            {
                this.props.player
                    ?
                    <Profile
                        player={this.props.player}
                    />
                    :
                    <Players
                        players={this.props.players}
                        totalPlayersCount={this.props.totalPlayersCount}
                        onSetPlayerProfile={this.onSetPlayerProfile}
                    />
            }

        </>
    };
};

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        player: state.playersPage.player,
        players: state.playersPage.players,
        totalPlayersCount: state.playersPage.content,
    };
};

//коннектит props и dispatch к UI компоненту
export default connect(mapStateToProps, {
    setState,
    setPlayerProfile
})(PlayersContainer);
import React from "react";
import Players from "./Players";
import { connect } from "react-redux";
import { setState, setPlayerProfile } from "../../common/reducer/players-reducer";
import Profile from "./Profile";
import { API } from "../../api/api";

class PlayersContainer extends React.Component {

    componentDidMount() {
        API.getPlayers()
            .then(data => {
                if (data.status === "OK") {
                    this.props.setState(data);
                }
            });
    }

    onSetPlayerProfile = (name) => {
        API.getProfile(name)
            .then(data => {
                if (data.status === "OK") {
                    this.props.setPlayerProfile(data.player);
                }
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
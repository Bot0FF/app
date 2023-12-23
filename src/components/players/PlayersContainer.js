import React from "react";
import Players from "./Players";
import { connect } from "react-redux";
import { listPlayers, playerProfile } from "../../common/reducer/players-reducer";
import Profile from "./Profile";

class PlayersContainer extends React.Component {

    componentDidMount() {
        this.props.listPlayers();
    };

    onGetPlayerProfile = (name) => {
        this.props.playerProfile(name);
    };

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
                        onGetPlayerProfile={this.onGetPlayerProfile}
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
    listPlayers,
    playerProfile
})(PlayersContainer);
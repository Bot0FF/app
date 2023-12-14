import React from "react";
import axios from "axios";
import { API_URL } from './../../services/UrlService';
import "./main.css";

class Main extends React.Component {

    componentDidMount() {
        axios.get(API_URL + "/im/main").then(response => {
            this.props.setPlayer(response.data);
        });
    }

    render() {
        return (
            <div className="user-state">
                <div>
                    <a>LOCATION: {this.props.player.locationType}</a>
                </div>
                <div>
                    <a>HP: {this.props.player.hp}</a>
                </div>
                <div>
                    <a>MANA: {this.props.player.mana}</a>
                </div>
                <div>
                    <a>POSITION: {this.props.player.posX} / {this.props.player.posY}</a>
                </div>
                <div className="button-item">
                    <div>
                        <button onClick={() => this.props.setMoveUp()}>Север</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.setMoveLeft()}>Запад</button>
                        <button onClick={() => this.props.setMoveRight()}>Восток</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.setMoveDown()}>Юг</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Main;
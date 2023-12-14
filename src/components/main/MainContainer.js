import Main from './Main';
import { connect } from "react-redux";
import { setPlayerAC, setMoveUpAC, setMoveLeftAC, setMoveRightAC, setMoveDownAC } from "../../common/reducer/main-reducer";

//передает props в UI компонент
let mapStateToProps = (state) => {
    return {
        player: state.mainPage.player,
    };
};

//передает callback в UI компонент
let mapDispatchToProps = (dispatch) => {
    return {
        setPlayer: (player) => {
            dispatch(setPlayerAC(player));
        },
        setMoveUp: () => {
            dispatch(setMoveUpAC());
        },
        setMoveLeft: () => {
            dispatch(setMoveLeftAC());
        },
        setMoveRight: () => {
            dispatch(setMoveRightAC());
        },
        setMoveDown: () => {
            dispatch(setMoveDownAC());
        }
    }
}

//коннектит props и dispatch к UI компоненту
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
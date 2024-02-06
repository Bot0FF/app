import React from "react";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    function ComponentWithRouterProp(props) {
        if (!props.isAuth) return <Navigate replace to="/" />
        if (props.status === 3) window.location.replace("/im")
        return (
            <Component
                {...props}
            />
        );
    }

    return ComponentWithRouterProp;
}

// export const withAuthRedirect = (Component) => {
//     class RedirectComponent extends React.Component {
//         render() {
//             if (!this.props.isAuth) return <Navigate replace to="/" />
//             if (this.props.status == 2) return <Navigate replace to="/im" />
//             return <Component {...this.props} />
//         };
//     };

//     return RedirectComponent;
// }
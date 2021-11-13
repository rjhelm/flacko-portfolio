import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";
import { 
    Home as HomeView,
} from "./views";

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/home" />
            <RouteWithLayout
                component={HomeView}
                exact
                layout={MainLayout}
                path="/home"
            />
             <Redirect to="/not-found" status="404" />
        </Switch>
    );
}

export default Routes;
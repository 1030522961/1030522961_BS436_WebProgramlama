import React from "react";
import ReactDOM from "react-dom";

import {Match} from "./match";
import {Home} from "./home";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

const notFound =()=> {
    return (
        <div>
            <h2>Aradıgınız sayfa buluanamdı</h2>
            <p>

                aradıpınız sayfaya ulaşılamıyor lutfen daha sonra tekrar deneyiniz.
            </p>
        </div>
    )
}

export const App = () => {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path='/match' component={Match}/>
                    <Route exact path='/' component={Home}/>
                    <Route component={notFound}/>
                </Switch>
            </div>
        </HashRouter>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));


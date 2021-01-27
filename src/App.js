import  React from  'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HorizontalMenu } from "./components/sidebars/HorizontalMenu";
import { Provider } from "./components/provider-component/Provider.jsx";
import { PagesViewProvider } from "./components/view-provider-client/PagesViewProvider.jsx";
import { MainPages } from "./components/main-pages/MainPages";
import {Sentense} from "./components/sentense/Sentense";
import {ServiceState} from "./components/context/service/ServiceState";
import {PagesViewClient} from "./components/view-provider-client/PagesViewClient";


export default function App() {
    return (
        <>
            <ServiceState>
                <Router>
                    <HorizontalMenu/>
                    <Switch>
                        <Route exact path={'/'} component={MainPages}/>
                        <Route exact path="/Provider" component={Provider}/>
                        <Route exact path="/PagesViewClient" component={PagesViewClient}/>
                        <Route exact path="/PagesViewProvider" component={PagesViewProvider}/>
                        <Route exact path="/Sentences/:nameCategory" component={Sentense}/>
                    </Switch>
                </Router>
            </ServiceState>
        </>
    );
}
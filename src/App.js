import  React from  'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HorizontalMenu } from "./components/Sidebars/HorizontalMenu";
import { Provider } from "./components/ProviderOrClient/Provider.jsx";
import { Client } from "./components/ProviderOrClient/Client.jsx";
import { PagesViewProvider } from "./components/PagesViewProvider/PagesViewProvider.jsx";
import { MainPages } from "./components/Main Pages/MainPages";
import {Sentense} from "./components/PageSentense/Sentense";
import {ServiceState} from "./components/context/service/ServiceState";


export default function App() {
    return (
        <>
            <ServiceState>
                <Router>
                    <HorizontalMenu/>
                    <Switch>
                        <Route exact path={'/'} component={MainPages}/>
                        <Route exact path="/Provider" component={Provider}/>
                        <Route exact path="/Client" component={Client}/>
                        <Route exact path="/PagesViewProvider" component={PagesViewProvider}/>
                        <Route exact path="/Sentences/:nameCategory" component={Sentense}/>
                    </Switch>
                </Router>
            </ServiceState>
        </>
    );
}
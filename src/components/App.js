import React, { Component } from "react";

import { observer, inject } from "mobx-react";
import CurrentView from "../helpers/renderCurrentView";
import "../styles/App.css";

@inject("viewStore")
@observer
class App extends Component {
    render() {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%"
                }}
            >
                <CurrentView store={this.props.viewStore} />
                <div
                    style={{ background: "#f62459", width: "fit-content" }}
                    onClick={() => this.props.viewStore.showComponent("index")}
                >
                    Show Index
                </div>
                <div
                    style={{ background: "#2fb5b5", width: "fit-content" }}
                    onClick={() => this.props.viewStore.showComponent("login")}
                >
                    Show login
                </div>
            </div>
        );
    }
}

export default App;

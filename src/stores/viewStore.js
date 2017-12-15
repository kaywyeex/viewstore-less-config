import { observable, computed, action, useStrict } from "mobx";
import routes from "./routes";

useStrict(true);

class ViewStore {
    @observable currentView = null;
    @observable currentUser = null;

    @computed
    get isAuthenticated() {
        return !!this.currentUser;
    }

    @computed
    get currentPath() {
        let newPath;
        routes.map(route => {
            const { path, name } = route;
            this.currentView.name === name ? (newPath = path) : null;
        });
        return newPath;
    }

    @action
    showComponent(name) {
        this.currentView = {
            name: name
        };
    }
    // Add currentView actions here
}

const viewStore = new ViewStore();
export default viewStore;

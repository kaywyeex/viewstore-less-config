import { keyBy } from "lodash";
import { Router } from "director/build/director";
import { autorun } from "mobx";
import routes from "./routes";

export function startRouter(stores) {
    const store = stores.viewStore;

    let paths = {};
    routes.map(route => {
        const { path, name } = route;
        paths[path] = () => store.showComponent(name);
    });

    new Router(paths)

        .configure({
            notfound: () => store.showComponent("index"),
            html5history: true
        })
        .init();

    autorun(() => {
        const path = store.currentPath;
        if (path !== window.location.pathname) {
            window.history.pushState(null, null, path);
        }
    });
}

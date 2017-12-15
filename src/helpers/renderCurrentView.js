import { observer } from "mobx-react";
import routes from "../stores/routes";
export default observer(({ store }) => {
    const view = store.currentView;
    return routes.map(route => {
        return route.name === view.name ? route.component : null;
    });
});

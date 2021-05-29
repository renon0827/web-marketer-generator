import { createApp } from "vue";
import App from "./App.vue";

import "uikit/dist/css/uikit.css";
import "uikit/dist/css/uikit.min.css";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

(UIkit.use as UIkit.Icon)(Icons);

createApp(App).mount("#app");

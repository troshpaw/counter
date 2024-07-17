
import { render } from "./render/render.module.js";
import { setChangeDataCallback } from "./data/data.module.js";

render();
setChangeDataCallback(render);
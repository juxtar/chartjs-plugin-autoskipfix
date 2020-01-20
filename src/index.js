import Chart from "chart.js";
import { AutoSkipFixPlugin } from "./plugin";

var autoskipfixPlugin = AutoSkipFixPlugin(Chart);

export default autoskipfixPlugin;

Chart.pluginService.register(autoskipfixPlugin);

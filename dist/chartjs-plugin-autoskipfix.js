(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('chart.js')) :
    typeof define === 'function' && define.amd ? define(['chart.js'], factory) :
    (global = global || self, global.AutoSkipFixPlugin = factory(global.Chart));
}(this, (function (Chart) { 'use strict';

    Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

    function AutoSkipFixPlugin(Chart) {
      Chart.Scale.prototype._autoSkip = function (ticks) {
        // TODO: Implement new autoskip function
        return ticks;
      };

      return {
        id: 'autoskipfix'
      };
    }

    var autoskipfixPlugin = AutoSkipFixPlugin(Chart);
    Chart.pluginService.register(autoskipfixPlugin);

    return autoskipfixPlugin;

})));

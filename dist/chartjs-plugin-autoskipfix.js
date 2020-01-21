(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('chart.js')) :
    typeof define === 'function' && define.amd ? define(['chart.js'], factory) :
    (global = global || self, global.AutoSkipFixPlugin = factory(global.Chart));
}(this, (function (Chart) { 'use strict';

    Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

    function skip(ticks, spacing) {
      var end = ticks.length;
      var count = 0;
      var next = 0;
      spacing = Math.ceil(spacing);
      return ticks.map(function (tick, i) {
        if (i === next || i === end - 1) {
          tick._index = i;
          count++;
          next = Math.round(count * spacing);
        } else {
          delete tick.label;
        }

        return tick;
      });
    }

    function AutoSkipFixPlugin(Chart) {
      Chart.Scale.prototype._autoSkip = function (ticks) {
        var me = this;
        var tickOpts = me.options.ticks;
        var axisLength = me._length;
        var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
        var spacing = Math.max((ticks.length - 1) / ticksLimit, 1);
        return skip(ticks, spacing).reduce(function (list, tick) {
          if (tick._index != null) list.push(tick);
          return list;
        }, []);
      };

      return {
        id: 'autoskipfix'
      };
    }

    var autoskipfixPlugin = AutoSkipFixPlugin(Chart);
    Chart.pluginService.register(autoskipfixPlugin);

    return autoskipfixPlugin;

})));

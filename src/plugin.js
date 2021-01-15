function skip(ticks, spacing) {
	var end = ticks.length;
	var count = 0;
	var next = 0;

	spacing = Math.ceil(spacing);

    return ticks.map((tick, i) => {
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

function autoskip(ticks) {
    var me = this;
    var tickOpts = me.options.ticks;
    var axisLength = me._length;
    var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
    var spacing = Math.max((ticks.length - 1) / ticksLimit, 1);

    return skip(ticks, spacing)
            .reduce((list, tick) => {
                if (tick._index != null)
                    list.push(tick);
                return list;
            }, []);
}

export function AutoSkipFixPlugin() {
    return {
        id: 'autoskipfix',
        beforeUpdate: function(chartInstance) {
            Object.keys(chartInstance.scales).forEach(scale => chartInstance.scales[scale]._autoSkip = autoskip);
        }
    };
};

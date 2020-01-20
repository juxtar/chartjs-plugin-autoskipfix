export function AutoSkipFixPlugin(Chart) {
    Chart.Scale.prototype._autoSkip = function(ticks) {
        // TODO: Implement new autoskip function

        return ticks;
    };

    return {
        id: 'autoskipfix'
    };
};

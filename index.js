const uvRun = require('./build/deasync.node')

function loopWhile(pred) {
    while (true) {
        if (!pred()) break;
        process._tickCallback()
        if (!pred()) break;
        uvRun()
    }
}

module.exports = { loopWhile }

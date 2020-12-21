module.exports = function () {

    let build;

    let module;

    let screen;

    return {
        noColors: false,

        reportTaskStart (startTime, userAgents, testCount) {
            this.startTime = startTime;
            this.testCount = testCount;
            this.write(this.moment().format('DD MMMM YYYY, hh:mm A')).newline();
            this.write('Build, Module, Screen, Testcase Number, Scenario, Result, Failure Info, Test Duration').newline();
        },

        reportFixtureStart (name, path, meta) {

            build = meta.build;
            module = meta.module;
            screen = meta.screen;

            this.write(' ').newline().newline();
        },

        reportTestDone (name, testRunInfo, meta) {
            const errors = testRunInfo.errs;
            const hasErrors = !!errors.length;
            const result = hasErrors ? 'FAILED' : 'PASSED';
            const durationMs = testRunInfo.durationMs;

            let errInfo = '- ';

            if (hasErrors) {
                errors.forEach(element => {
                    if (element.errMsg) 
                        errInfo += element.errMsg + '-';
                });
            }

            this.write(`${build}, ${module}, ${screen}, ${meta.testcaseNo}, ${meta.scenario}, ${result}, ${errInfo}, ${durationMs}ms`)
                .newline();
        },

        reportTaskDone (endTime, passed, warnings, result) {
            const durationMs = endTime - this.startTime;

            const durationStr = this.moment
                .duration(durationMs)
                .format('h[h] mm[m] ss[s]');

            let footer = result.failedCount ?
                `${result.failedCount}/${this.testCount} failed` :
                `${result.passedCount} passed`;

            footer += ` (Duration: ${durationStr})`;
            footer += ` (Skipped: ${result.skippedCount})`;
            footer += ` (Warnings: ${warnings.length})`;

            this.newline().newline().newline().newline().write(footer)
                .newline();
        }
    };
};

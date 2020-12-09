var TestRunErrorFormattableAdapter = require('testcafe').embeddingUtils.TestRunErrorFormattableAdapter;
var UncaughtErrorOnPage            = require('testcafe').embeddingUtils.testRunErrors.UncaughtErrorOnPage;
var ActionElementNotFoundError     = require('testcafe').embeddingUtils.testRunErrors.ActionElementNotFoundError;
var testCallsite                   = require('./test-callsite');

const testMeta = { testcaseNo: 'test', scenario: 'Test meta scenario' };

function makeErrors (errDescrs) {
    return errDescrs.map(function (descr) {
        return new TestRunErrorFormattableAdapter(descr.err, descr.metaInfo);
    });
}

module.exports = [
    {
        method: 'reportTaskStart',
        args:   [
            new Date('1970-01-01T00:00:00.000Z'),
            [
                'Chrome 41.0.2227 / Mac OS X 10.10.1',
                'Firefox 47 / Mac OS X 10.10.1'
            ],
            7
        ]
    },
    {
        method: 'reportFixtureStart',
        args:   [
            'First fixture',
            './fixture1.js',
            { build: 'DEV V1.3', module: 'Authentication', screen: 'Forgot Password' }
        ]
    },
    {
        method: 'reportTestDone',
        args:   [
            'First test in first fixture',
            {
                errs:           [],
                durationMs:     74000,
                unstable:       true,
                screenshotPath: '/screenshots/1445437598847'
            },
            testMeta
        ]
    },
    {
        method: 'reportTestDone',
        args:   [
            'Second test in first fixture',
            {
                errs: makeErrors([
                    {

                        err: new UncaughtErrorOnPage('Some error', 'http://example.org'),

                        metaInfo: {
                            userAgent:      'Chrome 41.0.2227 / Mac OS X 10.10.1',
                            screenshotPath: '/screenshots/1445437598847/errors',
                            callsite:       testCallsite,
                            testRunState:   'inTest'
                        }
                    },
                    {
                        err: new ActionElementNotFoundError({ apiFnChain: ['one', 'two', 'three'], apiFnIndex: 1 }),

                        metaInfo: {
                            userAgent:    'Firefox 47 / Mac OS X 10.10.1',
                            callsite:     testCallsite,
                            testRunState: 'inTest'
                        }
                    }
                ]),

                durationMs:     74000,
                unstable:       false,
                screenshotPath: '/screenshots/1445437598847'
            },
            testMeta
        ]
    },
    {
        method: 'reportTestDone',
        args:   [
            'Third test in first fixture',
            {
                errs:           [],
                durationMs:     74000,
                unstable:       false,
                screenshotPath: null
            },
            testMeta
        ]
    },
    {
        method: 'reportFixtureStart',
        args:   [
            'Second fixture',
            './fixture2.js',
            { build: 'DEV V1.3', module: 'Authentication', screen: 'Forgot Password' }
        ]
    },
    {
        method: 'reportTestDone',
        args:   [
            'First test in second fixture',
            {
                errs:           [],
                durationMs:     74000,
                unstable:       false,
                screenshotPath: null
            },
            testMeta
        ]
    },
    {
        method: 'reportTestDone',
        args:   [
            'Second test in second fixture',
            {
                errs:           [],
                durationMs:     74000,
                unstable:       false,
                screenshotPath: null
            },
            testMeta
        ]
    },
    {
        method: 'reportTestDone',
        args:   [
            'Third test in second fixture',
            {
                errs:           [],
                durationMs:     0,
                unstable:       false,
                screenshotPath: null,
                skipped:        false
            },
            testMeta
        ]
    },
    {
        method: 'reportFixtureStart',
        args:   [
            'Third fixture',
            './fixture3.js',
            { build: 'DEV V1.3', module: 'Authentication', screen: 'Forgot Password' }
        ]
    },
    {
        method: 'reportTestDone',
        args:   [
            'First test in third fixture',
            {
                errs: makeErrors([
                    {
                        err: new ActionElementNotFoundError({ apiFnChain: ['one', 'two', 'three'], apiFnIndex: 1 }),

                        metaInfo: {
                            userAgent:    'Firefox 47 / Mac OS X 10.10.1',
                            callsite:     testCallsite,
                            testRunState: 'inBeforeEach'
                        }
                    }
                ]),

                durationMs:     74000,
                unstable:       true,
                screenshotPath: null
            },
            testMeta
        ]
    },
];
# testcafe-reporter-ai-excel
[![Build Status](https://travis-ci.org/shreenil.patel/testcafe-reporter-ai-excel.svg)](https://travis-ci.org/shreenil.patel/testcafe-reporter-ai-excel)

This is the **ai-excel** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/shreenil.patel/testcafe-reporter-ai-excel/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-ai-excel
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter ai-excel
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('ai-excel') // <-
    .run();
```

## Author
 (http://idontknowyet.com)

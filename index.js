'use strict';
const alfy = require('alfy');
const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,*#@_;"

function random(keys, n) {
    var s = ""
    for (let i = 0; i < n; i++) {
        s += keys[Math.floor(Math.random() * keys.length)]
    }
    return s
}

var count = parseInt(alfy.input)
count = count || 8

function out(title, subtitle) {
    return { title, subtitle, arg: subtitle }
}

alfy.output([
    out("字符串", random(CHARS, count)),
    out("数字", random(CHARS.slice(0, 10), count)),
]);
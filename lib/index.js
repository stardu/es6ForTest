'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var gen = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var f1, f2;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return readFile('file/a.txt');

                    case 2:
                        f1 = _context.sent;
                        _context.next = 5;
                        return readFile('file/b.txt');

                    case 5:
                        f2 = _context.sent;

                        console.log(f1.toString());
                        console.log(f2.toString());

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function gen() {
        return _ref.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

function readFile(fileName) {
    return new _promise2.default(function (resolve, reject) {
        fs.readFile(fileName, function (err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });
}

gen();
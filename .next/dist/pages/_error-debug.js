'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/MookCake/Public/git/next-op/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/MookCake/Public/git/next-op/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/MookCake/Public/git/next-op/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/MookCake/Public/git/next-op/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/MookCake/Public/git/next-op/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/MookCake/Public/git/next-op/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/MookCake/Public/git/next-op/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/MookCake/Public/git/next-op/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _ansiHtml = require('/Users/MookCake/Public/git/next-op/node_modules/ansi-html/index.js');

var _ansiHtml2 = _interopRequireDefault(_ansiHtml);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ErrorDebug = function (_React$Component) {
  (0, _inherits3.default)(ErrorDebug, _React$Component);

  function ErrorDebug() {
    (0, _classCallCheck3.default)(this, ErrorDebug);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorDebug.__proto__ || (0, _getPrototypeOf2.default)(ErrorDebug)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorDebug, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          message = _props.message,
          stack = _props.stack,
          path = _props.path;

      return _react2.default.createElement('div', { className: 'errorDebug', 'data-jsx': 1455198374
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', 'data-jsx': 1455198374
      })), path ? _react2.default.createElement('div', { className: 'heading', 'data-jsx': 1455198374
      }, 'Error in ', path) : null, name === 'ModuleBuildError' ? _react2.default.createElement('pre', { className: 'message', dangerouslySetInnerHTML: { __html: (0, _ansiHtml2.default)(encodeHtml(message)) }, 'data-jsx': 1455198374
      }) : _react2.default.createElement('pre', { className: 'message', 'data-jsx': 1455198374
      }, stack), _react2.default.createElement(_style2.default, {
        styleId: 1579730202,
        css: '\n        body {\n          background: #a6004c;\n          margin: 0;\n        }\n      '
      }), _react2.default.createElement(_style2.default, {
        styleId: 3076811513,
        css: '.errorDebug[data-jsx="1455198374"] {height: 100%;padding: 16px;box-sizing: border-box;}.message[data-jsx="1455198374"] {font-family: "SF Mono", "Roboto Mono", "Fira Mono", menlo-regular, monospace;font-size: 10px;color: #fbe7f1;margin: 0;white-space: pre-wrap;word-wrap: break-word;}.heading[data-jsx="1455198374"] {font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;font-size: 13px;font-weight: bold;color: #ff84bf;margin-bottom: 20pxl        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLWRlYnVnLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFDRyxvQ0FDRSxhQUNDLGNBQ1MsdUJBQ3hCLENBRVMsaUNBQ3FFLDZFQUM3RCxnQkFDRCxlQUNMLFVBQ1ksc0JBQ0Esc0JBQ3ZCLENBRVMsaUNBQytILHVJQUN2SCxnQkFDRSxrQkFDSCxlQUVoQiIsImZpbGUiOiJub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci1kZWJ1Zy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTW9va0Nha2UvUHVibGljL2dpdC9uZXh0LW9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGFuc2lIVE1MIGZyb20gJ2Fuc2ktaHRtbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JEZWJ1ZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgZXJyIH0pIHtcbiAgICBjb25zdCB7IG5hbWUsIG1lc3NhZ2UsIHN0YWNrLCBtb2R1bGUgfSA9IGVyclxuICAgIHJldHVybiB7IG5hbWUsIG1lc3NhZ2UsIHN0YWNrLCBwYXRoOiBtb2R1bGUgPyBtb2R1bGUucmF3UmVxdWVzdCA6IG51bGwgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IG5hbWUsIG1lc3NhZ2UsIHN0YWNrLCBwYXRoIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Vycm9yRGVidWcnPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge3BhdGggPyA8ZGl2IGNsYXNzTmFtZT0naGVhZGluZyc+RXJyb3IgaW4ge3BhdGh9PC9kaXY+IDogbnVsbH1cbiAgICAgIHtcbiAgICAgICAgbmFtZSA9PT0gJ01vZHVsZUJ1aWxkRXJyb3InXG4gICAgICAgID8gPHByZSBjbGFzc05hbWU9J21lc3NhZ2UnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYW5zaUhUTUwoZW5jb2RlSHRtbChtZXNzYWdlKSkgfX0gLz5cbiAgICAgICAgOiA8cHJlIGNsYXNzTmFtZT0nbWVzc2FnZSc+e3N0YWNrfTwvcHJlPlxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2E2MDA0YztcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmVycm9yRGVidWcge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBcIlJvYm90byBNb25vXCIsIFwiRmlyYSBNb25vXCIsIG1lbmxvLXJlZ3VsYXIsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICNmYmU3ZjE7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGluZyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICNmZjg0YmY7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweGxcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICB9XG59XG5cbmNvbnN0IGVuY29kZUh0bWwgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcbn1cblxuLy8gc2VlIGNvbG9yIGRlZmluaXRpb25zIG9mIGJhYmVsLWNvZGUtZnJhbWU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvYmxvYi9tYXN0ZXIvcGFja2FnZXMvYmFiZWwtY29kZS1mcmFtZS9zcmMvaW5kZXguanNcblxuYW5zaUhUTUwuc2V0Q29sb3JzKHtcbiAgcmVzZXQ6IFsnZmZmJywgJ2E2MDA0YyddLFxuICBkYXJrZ3JleTogJ2U1NDU5MCcsXG4gIHllbGxvdzogJ2VlOGNiYicsXG4gIGdyZWVuOiAnZjJhMmM3JyxcbiAgbWFnZW50YTogJ2ZiZTdmMScsXG4gIGJsdWU6ICdmZmYnLFxuICBjeWFuOiAnZWY4YmI5JyxcbiAgcmVkOiAnZmZmJ1xufSlcbiJdfQ== */\n/*@ sourceURL=node_modules/next/dist/pages/_error-debug.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var err = _ref.err;
      var name = err.name,
          message = err.message,
          stack = err.stack,
          module = err.module;

      return { name: name, message: message, stack: stack, path: module ? module.rawRequest : null };
    }
  }]);
  return ErrorDebug;
}(_react2.default.Component);

exports.default = ErrorDebug;

var encodeHtml = function encodeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// see color definitions of babel-code-frame:
// https://github.com/babel/babel/blob/master/packages/babel-code-frame/src/index.js

_ansiHtml2.default.setColors({
  reset: ['fff', 'a6004c'],
  darkgrey: 'e54590',
  yellow: 'ee8cbb',
  green: 'f2a2c7',
  magenta: 'fbe7f1',
  blue: 'fff',
  cyan: 'ef8bb9',
  red: 'fff'
});
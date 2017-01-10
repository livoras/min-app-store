'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/Users/MookCake/Public/git/next-op/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/MookCake/Public/git/next-op/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('/Users/MookCake/Public/git/next-op/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _link = require('/Users/MookCake/Public/git/next-op/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react3 = require('/Users/MookCake/Public/git/next-op/node_modules/react/react.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Page2.default,
        null,
        _react2.default.createElement(
          'h1',
          null,
          '\u4E3B\u9875'
        ),
        _react2.default.createElement(
          _link2.default,
          { href: '/about' },
          _react2.default.createElement(
            'a',
            null,
            'Hello World - ',
            this.props.name.name
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req;
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('http://localhost:3000/api/test');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                _context.t0 = _context.sent;
                return _context.abrupt('return', {
                  name: _context.t0
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return Index;
}(_react3.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJuYW1lIiwicmVxIiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs2QkFRVDtBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQU0sTUFBSyxRQUFYO0FBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQWtCLGlCQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JBO0FBQWxDO0FBQXBCO0FBRkYsT0FERjtBQU1EOzs7OztZQWQrQkMsRyxTQUFBQSxHOzs7Ozs7O3VCQUNaQyxNQUFNLGdDQUFOLEM7OztBQUFaQyxtQjs7dUJBRVFBLElBQUlDLElBQUosRTs7Ozs7QUFBWkosc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFKZUYsSyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTW9va0Nha2UvUHVibGljL2dpdC9uZXh0LW9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Rlc3QnKVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBhd2FpdCByZXMuanNvbigpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxoMT7kuLvpobU8L2gxPlxuICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPjxhPkhlbGxvIFdvcmxkIC0ge3RoaXMucHJvcHMubmFtZS5uYW1lfTwvYT48L0xpbms+XG4gICAgICA8L1BhZ2U+XG4gICAgKVxuICB9XG59XG4iXX0=
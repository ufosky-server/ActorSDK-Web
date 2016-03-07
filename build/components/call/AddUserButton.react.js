'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var AddUserButton = function (_Component) {
  _inherits(AddUserButton, _Component);

  function AddUserButton() {
    _classCallCheck(this, AddUserButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AddUserButton.prototype.render = function render() {
    return _react2.default.createElement(
      'button',
      { className: 'button button--square col-xs', disabled: true, onClick: this.props.onClick },
      _react2.default.createElement(
        'i',
        { className: 'material-icons' },
        'person_add'
      ),
      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'call.addUser' })
    );
  };

  return AddUserButton;
}(_react.Component);

AddUserButton.propTypes = {
  onClick: _react.PropTypes.func.isRequired
};
exports.default = AddUserButton;
//# sourceMappingURL=AddUserButton.react.js.map
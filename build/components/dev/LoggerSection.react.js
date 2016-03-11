'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('flux/utils');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LoggerStore = require('../../stores/LoggerStore');

var _LoggerStore2 = _interopRequireDefault(_LoggerStore);

var _LoggerFilter = require('./LoggerFilter.react');

var _LoggerFilter2 = _interopRequireDefault(_LoggerFilter);

var _LoggerRow = require('./LoggerRow.react');

var _LoggerRow2 = _interopRequireDefault(_LoggerRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var LoggerSection = function (_Component) {
  _inherits(LoggerSection, _Component);

  function LoggerSection() {
    _classCallCheck(this, LoggerSection);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LoggerSection.calculateState = function calculateState() {
    return _LoggerStore2.default.getState();
  };

  LoggerSection.prototype.renderLogs = function renderLogs() {
    return this.state.logs.map(function (data, index) {
      return _react2.default.createElement(_LoggerRow2.default, _extends({}, data, { key: index }));
    });
  };

  LoggerSection.prototype.renderBody = function renderBody() {
    return _react2.default.createElement(
      'div',
      { className: 'activity__body logger' },
      _react2.default.createElement(_LoggerFilter2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'logger__row__container' },
        this.renderLogs()
      )
    );
  };

  LoggerSection.prototype.render = function render() {
    var className = (0, _classnames2.default)('activity', {
      'activity--shown': this.state.isOpen
    });

    return _react2.default.createElement(
      'section',
      { className: className },
      this.renderBody()
    );
  };

  return LoggerSection;
}(_react.Component);

LoggerSection.getStores = function () {
  return [_LoggerStore2.default];
};

exports.default = _utils.Container.create(LoggerSection);
//# sourceMappingURL=LoggerSection.react.js.map
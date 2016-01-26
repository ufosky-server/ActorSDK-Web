'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _utils = require('flux/utils');

var _ActorAppDispatcher = require('../dispatcher/ActorAppDispatcher');

var _ActorAppDispatcher2 = _interopRequireDefault(_ActorAppDispatcher);

var _ActorAppConstants = require('../constants/ActorAppConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _messages = [];
var _overlay = [];
var _isLoaded = false;
var _selectedMessages = new _immutable2.default.Set();

/**
 * Class representing a store for messages.
 */

var MessageStore = (function (_Store) {
  _inherits(MessageStore, _Store);

  function MessageStore(dispatcher) {
    _classCallCheck(this, MessageStore);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MessageStore).call(this, dispatcher));
  }

  /**
   * @returns {Array} All messages stored for currently bound conversation
   */

  _createClass(MessageStore, [{
    key: 'getAll',
    value: function getAll() {
      return _messages;
    }

    /**
     * @returns {Array} Meesages overlay
     */

  }, {
    key: 'getOverlay',
    value: function getOverlay() {
      return _overlay;
    }
  }, {
    key: 'isLoaded',
    value: function isLoaded() {
      return _isLoaded;
    }

    /**
     * @returns {Array} Selected messages
     */

  }, {
    key: 'getSelected',
    value: function getSelected() {
      return _selectedMessages;
    }
  }, {
    key: '__onDispatch',
    value: function __onDispatch(action) {
      switch (action.type) {
        case _ActorAppConstants.ActionTypes.SELECT_DIALOG_PEER:
          _selectedMessages = new _immutable2.default.Set();
          this.__emitChange();
          break;

        case _ActorAppConstants.ActionTypes.MESSAGES_CHANGED:
          _messages = action.messages;
          _overlay = action.overlay;
          _isLoaded = action.isLoaded;
          this.__emitChange();
          break;

        case _ActorAppConstants.ActionTypes.MESSAGES_SET_SELECTED:
          _selectedMessages = action.selectedMesages;
          this.__emitChange();
          break;

        default:
      }
    }
  }]);

  return MessageStore;
})(_utils.Store);

exports.default = new MessageStore(_ActorAppDispatcher2.default);
//# sourceMappingURL=MessageStore.js.map
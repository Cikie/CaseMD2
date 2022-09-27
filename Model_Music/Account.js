"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(Username, Password) {
        this._username = Username;
        this._passWord = Password;
    }
    Object.defineProperty(Account.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "passWord", {
        get: function () {
            return this._passWord;
        },
        set: function (value) {
            this._passWord = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;

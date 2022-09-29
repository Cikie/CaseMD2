"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Account = void 0;
var ManagerAlbum_1 = require("../Manager_Music/ManagerAlbum");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(Username, Password) {
        var _this = _super.call(this) || this;
        _this._username = Username;
        _this._passWord = Password;
        return _this;
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
}(ManagerAlbum_1.ManagerAlbum));
exports.Account = Account;

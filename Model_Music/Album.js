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
exports.Album = void 0;
var ManagerSong_1 = require("../Manager_Music/ManagerSong");
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, name, createdUser) {
        var _this = _super.call(this) || this;
        _this.listSong = [];
        _this._id = id;
        _this._name = name;
        _this._createdUser = createdUser;
        return _this;
    }
    Object.defineProperty(Album.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "createdUser", {
        get: function () {
            return this._createdUser;
        },
        set: function (value) {
            this._createdUser = value;
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.findAllSong = function () {
        var str = "";
        for (var i = 0; i < this.listSong.length; i++) {
            str += "\u001B[32m  ".concat(i + 1, " Id:  ").concat(this.listSong[i].id, ". Name: ").concat(this.listSong[i].name, "  Singer: ").concat(this.listSong[i].singer, "  Musician:  ").concat(this.listSong[i].musician, "  \u001B[0m \n");
        }
        return str;
    };
    return Album;
}(ManagerSong_1.ManagerSong));
exports.Album = Album;

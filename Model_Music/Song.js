"use strict";
exports.__esModule = true;
exports.Song = void 0;
var Song = /** @class */ (function () {
    function Song(id, name, singer, musician) {
        this._id = id;
        this._name = name;
        this._singer = singer;
        this._musician = musician;
    }
    Object.defineProperty(Song.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Song.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Song.prototype, "singer", {
        get: function () {
            return this._singer;
        },
        set: function (value) {
            this._singer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Song.prototype, "musician", {
        get: function () {
            return this._musician;
        },
        set: function (value) {
            this._musician = value;
        },
        enumerable: false,
        configurable: true
    });
    return Song;
}());
exports.Song = Song;

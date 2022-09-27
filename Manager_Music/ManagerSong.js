"use strict";
exports.__esModule = true;
exports.ManagerSong = void 0;
var ManagerSong = /** @class */ (function () {
    function ManagerSong() {
        this.listSong = [];
    }
    ManagerSong.prototype.add = function (t) {
        if (t) {
            this.listSong.push(t);
            console.log(this.listSong);
        }
        else {
            return 'Please enter song name !';
        }
    };
    ManagerSong.prototype.findById = function (id) {
        for (var i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].id == id) {
                return i;
            }
        }
        return 'Invalid Song  !';
    };
    ManagerSong.prototype.findByName = function (name) {
        for (var i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].name == name) {
                return this.listSong[i];
            }
        }
        return 'This Song name not Found !';
    };
    ManagerSong.prototype.deleteById = function (id) {
        var index = this.findById(id);
        this.listSong.splice(index, 1);
    };
    ManagerSong.prototype.edit = function (id, t) {
        var index = this.findById(id);
        this.listSong[index] = t;
    };
    ManagerSong.prototype.findAll = function () {
        return this.listSong;
    };
    return ManagerSong;
}());
exports.ManagerSong = ManagerSong;

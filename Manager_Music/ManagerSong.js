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
        var listNameSong = this.listSong.filter((function (item) {
            return item.name.toUpperCase().includes(name.toUpperCase());
        }));
        if (listNameSong.length == 0) {
            console.log("\u001B[31m  This Album name not Found !  \u001B[0m");
        }
        else {
            console.log(listNameSong);
        }
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
    ManagerSong.prototype.showAllSong = function () {
        var str = "";
        for (var i = 0; i < this.listSong.length; i++) {
            str += "\u001B[32m  ".concat(i + 1, " Id:  ").concat(this.listSong[i].id, ". Name: ").concat(this.listSong[i].name, "  Singer: ").concat(this.listSong[i].singer, "  Musician:  ").concat(this.listSong[i].musician, "  \u001B[0m \n");
        }
        return str;
    };
    return ManagerSong;
}());
exports.ManagerSong = ManagerSong;

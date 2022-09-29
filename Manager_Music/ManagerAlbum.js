"use strict";
exports.__esModule = true;
exports.ManagerAlbum = void 0;
var ManagerAlbum = /** @class */ (function () {
    function ManagerAlbum() {
        this.listAlbum = [];
    }
    ManagerAlbum.prototype.add = function (t) {
        if (t) {
            this.listAlbum.push(t);
        }
        else {
            return 'Please enter Album name!';
        }
    };
    ManagerAlbum.prototype.findById = function (id) {
        for (var i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].id == id) {
                return i;
            }
        }
        return "\u001B[31m  IvaLid Album  \u001B[0m";
    };
    ManagerAlbum.prototype.findByName = function (name) {
        var listNameAlbum = this.listAlbum.filter((function (item) {
            return item.name.toUpperCase().includes(name.toUpperCase());
        }));
        if (listNameAlbum.length == 0) {
            console.log("\u001B[31m  This Album name not Found !  \u001B[0m");
        }
        else {
            console.log(listNameAlbum);
        }
    };
    ManagerAlbum.prototype.deleteById = function (id) {
        var index = this.findById(id);
        this.listAlbum.splice(index, 1);
    };
    ManagerAlbum.prototype.edit = function (id, t) {
        var index = this.findById(id);
        this.listAlbum[index] = t;
    };
    ManagerAlbum.prototype.findAll = function () {
        return this.listAlbum;
    };
    return ManagerAlbum;
}());
exports.ManagerAlbum = ManagerAlbum;

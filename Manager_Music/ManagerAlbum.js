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
        return 'InvaLid Album';
    };
    ManagerAlbum.prototype.findByName = function (name) {
        for (var i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].name == name) {
                return this.listAlbum[i];
            }
        }
        return 'This Album name not Found !';
        // this.listAlbum.filter(item =>item.name.includes(name))
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
        // for (let i = 0; i < this.listAlbum.length; i++) {
        //
        // }
        // this.listAlbum.forEach(e=>{
        //     e.listSong.forEach(j=>{
        //         console.log(j)
        //     })
        // })
        return this.listAlbum;
    };
    return ManagerAlbum;
}());
exports.ManagerAlbum = ManagerAlbum;

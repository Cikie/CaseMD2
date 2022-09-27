"use strict";
exports.__esModule = true;
exports.AccountManange = void 0;
var AccountManange = /** @class */ (function () {
    function AccountManange() {
        this.listAccount = [];
    }
    AccountManange.prototype.add = function (t) {
        this.listAccount.push(t);
    };
    AccountManange.prototype.deleteById = function (id) {
        var index = this.findById(id);
        this.listAccount.splice(index, 1);
    };
    AccountManange.prototype.edit = function (id, t) {
        var index = this.findById(id);
        this.listAccount[index] = t;
    };
    AccountManange.prototype.findAll = function () {
        return this.listAccount;
    };
    AccountManange.prototype.findById = function (id) {
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].id == id) {
                return i;
            }
        }
        return 'This Account is not found !';
    };
    AccountManange.prototype.findByName = function (name) {
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].username == name) {
                return this.listAccount[i];
            }
        }
        return 'This Account is not found !';
    };
    return AccountManange;
}());
exports.AccountManange = AccountManange;

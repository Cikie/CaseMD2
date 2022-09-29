"use strict";
exports.__esModule = true;
exports.AccountManage = void 0;
var AccountManage = /** @class */ (function () {
    function AccountManage() {
        this.listAccount = [];
    }
    AccountManage.prototype.add = function (t) {
        this.listAccount.push(t);
    };
    AccountManage.prototype.deleteById = function (id) {
        var index = this.findById(id);
        this.listAccount.splice(index, 1);
    };
    AccountManage.prototype.edit = function (id, t) {
        var index = this.findById(id);
        this.listAccount[index] = t;
    };
    AccountManage.prototype.findById = function (id) {
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].id == id) {
                return i;
            }
        }
        return 'This Account is not found !';
    };
    AccountManage.prototype.findByName = function (name) {
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].username == name) {
                return this.listAccount[i];
            }
        }
        return 'This Account is not found !';
    };
    AccountManage.prototype.findAll = function () {
        return this.listAccount;
    };
    AccountManage.prototype.findAllAccount = function () {
        var str = "";
        for (var i = 0; i < this.listAccount.length; i++) {
            str += "\u001B[32m  ".concat(i + 1, ". UserName: ").concat(this.listAccount[i].username, " . Password: ").concat(this.listAccount[i].passWord, "  \u001B[0m \n");
        }
        return str;
    };
    return AccountManage;
}());
exports.AccountManage = AccountManage;

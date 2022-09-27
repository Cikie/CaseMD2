import {Account} from "../Model_Music/Account";
import {Manager} from "./Manager";

export class AccountManange implements Manager<Account>{
    listAccount:Account[] = [];

    add(t: Account) {
        this.listAccount.push(t);
    }

    deleteById(id: number) {
        let index = this.findById(id);
        this.listAccount.splice(index,1);
    }

    edit(id: number, t: Account) {
        let index = this.findById(id);
        this.listAccount[index] = t;
    }

    findAll() {
        return this.listAccount
    }

    findById(id: number):any {
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].id == id){
                return i
            }
        }
        return 'This Account is not found !'
    }

    findByName(name: string) {
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].username == name){
                return this.listAccount[i]
            }
        }
        return 'This Account is not found !'
    }

}
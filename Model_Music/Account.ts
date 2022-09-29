import {ManagerAlbum} from "../Manager_Music/ManagerAlbum";

export class Account extends ManagerAlbum {
    private _id: number
    private _username: string;
    private _password: string;

    constructor(Username: string, Password: string) {
        super()
        this._username = Username;
        this._password = Password;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }


}
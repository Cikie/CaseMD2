export class Account {
    private _id:number
    private _username: string;
    private _passWord: string;


    constructor( Username: string, Password: string) {
        this._username = Username;
        this._passWord = Password;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get passWord(): string {
        return this._passWord;
    }

    set passWord(value: string) {
        this._passWord = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}
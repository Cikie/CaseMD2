import {ManagerSong} from "../Manager_Music/ManagerSong";
import {Song} from "./Song";
import {Account} from "./Account";

export class Album extends ManagerSong {
    private _id: number;
    private _name: string;
    listSong: Song[] = [];
    private _createdUser: Account;

    constructor(id: number, name: string, createdUser: Account) {
        super();
        this._id = id;
        this._name = name;
        this._createdUser = createdUser;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get createdUser(): Account {
        return this._createdUser;
    }

    set createdUser(value: Account) {
        this._createdUser = value;
    }

    findAllSong() {
        let strAlbum = ``
        for (let i = 0; i < this.listSong.length; i++) {
            strAlbum += `\x1b[32m  ${i + 1} Id:  ${this.listSong[i].id}. Name: ${this.listSong[i].name}  Singer: ${this.listSong[i].singer}  Musician:  ${this.listSong[i].musician}  \x1b[0m \n`
        }
        return strAlbum;
    }
}

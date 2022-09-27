import {Song} from "./Song";
import {ManagerSong} from "../Manager_Music/ManagerSong";

export class Album extends ManagerSong{
    private _id: number;
    private _name: string;
    listSong;

    constructor(id: number, name: string) {
        super();
        this._id = id;
        this._name = name;
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

}
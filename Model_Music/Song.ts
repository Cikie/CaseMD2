export class Song {
    private _id: number;
    private _name: string;
    private _singer: string;
    private _musician: string;


    constructor(id: number, name: string, singer: string, musician: string) {
        this._id = id;
        this._name = name;
        this._singer = singer;
        this._musician = musician;
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

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

    get musician(): string {
        return this._musician;
    }

    set musician(value: string) {
        this._musician = value;
    }
}
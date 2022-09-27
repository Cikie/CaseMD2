import {Manager} from "./Manager";
import {Song} from "../Model_Music/Song";

export class ManagerSong implements Manager<Song> {
    listSong: Song[] = [];

    add(t: Song) {
        if (t) {
            this.listSong.push(t);
            console.log(this.listSong)
        }else {
            return 'Please enter song name !'
        }

    }

    findById(id: number): any {
        for (let i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].id == id) {
                return i
            }
        }
        return 'Invalid Song  !'
    }

    findByName(name: string) {
        for (let i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].name == name){
                return this.listSong[i];
            }
        }
        return 'This Song name not Found !'
    }

    deleteById(id: number) {
        let index = this.findById(id);
        this.listSong.splice(index, 1)
    }

    edit(id: number, t: Song) {
        let index = this.findById(id);
        this.listSong[index] = t
    }

    findAll() {
        return this.listSong
    }




}
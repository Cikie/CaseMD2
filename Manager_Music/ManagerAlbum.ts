import {Manager} from "./Manager";
import {Album} from "../Model_Music/Album";


export class ManagerAlbum implements Manager<Album> {
    listAlbum: Album[] = [];

    add(t: Album) {
        if (t) {
            this.listAlbum.push(t);
        } else {
            return 'Please enter Album name!'
        }
    }

    findById(id: number):any {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].id == id){
                return i
            }
        }
        return 'InvaLid Album'
    }

    findByName(name: string) {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].name == name){
                return this.listAlbum[i];
            }
        }
        return 'This Album name not Found !'
        // this.listAlbum.filter(item =>item.name.includes(name))
    }

    deleteById(id: number) {
        let index = this.findById(id);
        this.listAlbum.splice(index,1)
    }

    edit(id: number, t: Album) {
        let index = this.findById(id);
        this.listAlbum[index] = t
    }

    findAll() {
        // for (let i = 0; i < this.listAlbum.length; i++) {
        //
        // }
        // this.listAlbum.forEach(e=>{
        //     e.listSong.forEach(j=>{
        //         console.log(j)
        //     })
        // })
        return this.listAlbum;
    }





}
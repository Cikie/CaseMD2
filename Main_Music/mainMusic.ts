import {Album} from "../Model_Music/Album";
import {ManagerAlbum} from "../Manager_Music/ManagerAlbum";
import {ManagerSong} from "../Manager_Music/ManagerSong";
import {AccountManage} from "../Manager_Music/AccountManage";
import {Account} from "../Model_Music/Account";
import {Song} from "../Model_Music/Song";

let input = require(`readline-sync`);
let theListAlbum: ManagerAlbum = new ManagerAlbum();
let theListSong: ManagerSong = new ManagerSong();
let theListAccount: AccountManage = new AccountManage();
let currentUser:Account;

function LoginMenu() {
    let loginMenu = `\x1b[35m-----Login-----\x1b[0m\n
    \x1b[1m  1.Login :  \x1b[0m
    \x1b[1m  2.Register :  \x1b[0m
    \x1b[1m  3.Show Account : \x1b[0m`
    let choice;
    do {
        console.log(loginMenu);
        choice = +input.question(`\x1b[34m  Enter your selection: \x1b[0m`)
        switch (choice) {
            case 1:
                login();
                break;
            case 2:
                register();
                break;
            case 3:
                showAccount();
                break;
        }
    } while (choice != 0);

    function login() {
        console.log(`\x1b[35m-----Login-----\x1b[0m`);
        let checkLogin = true;
        let userName = input.question(`\x1b[1m  Enter Username: \x1b[0m`);
        let passWord = input.question(`\x1b[1m  Enter Password: \x1b[0m`);
        for (let i = 0; i < theListAccount.listAccount.length; i++) {
            if (theListAccount.listAccount[i].username == userName && theListAccount.listAccount[i].password == passWord) {
                musicManager();
                checkLogin = false;
                console.log(`\x1b[32m Login Success !! \x1b[0m`);
            }
        }
        if (checkLogin) {
            console.log(`\x1b[31m Login Failure !! \x1b[0m`);
        }
    }
}

function register() {
    let flag: boolean = false;
    do {
        let userName = input.question(`\x1b[1m  Enter UserName: \x1b[0m`);
        let nameRegex = /^[a-zA-Z\-]+$/;
        let test = nameRegex.test(userName);
        for (let i = 0; i < theListAccount.listAccount.length; i++) {
            if (theListAccount.listAccount[i].username == userName) {
                test = false;
                console.log(`\x1b[31m  This account already in use!! \x1b[0m `);
            }
        }
        let useNameDone: string;
        let passWordDone: string;
        if (test == false) {
            console.log(`\x1b[31m  Please re-enter your account !!  \x1b[0m`);
        } else {
            useNameDone = userName;
            let flag2: boolean = false;
            do {
                let passWord = input.question(`\x1b[1m Enter your PassWord: \x1b[0m
                \x1b[34m  .Has 8 characters \x1b[0m
                \x1b[34m  .Capital letters  \x1b[0m
                \x1b[34m  .Has Number       \x1b[0m
                
                `)
                nameRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                test = nameRegex.test(passWord);
                if (test == false) {
                    console.log(`\x1b[31m Please re-enter your password !! \x1b[0m`);
                } else {
                    passWordDone = passWord;
                    let account = new Account(useNameDone, passWordDone);
                    theListAccount.add(account);
                    flag = true;
                    flag2 = true;
                    console.log(`\x1b[32m  Register Success !!  \x1b[0m`);

                }
            } while (flag2 == false);
        }

    } while (flag == false);
}

function showAccount() {
    console.log(theListAccount.findAllAccount())
}

function musicManager() {
    let menuAlbum = `\x1b[35m  -----Music Manager-----  \x1b[0m\n
    \x1b[34m   1.Add new Album     \x1b[0m
    \x1b[34m   2.Rename Album      \x1b[0m
    \x1b[34m   3.Find Album        \x1b[0m
    \x1b[34m   4.Show Song On Album\x1b[0m
    \x1b[34m   5.Delete Album      \x1b[0m
    \x1b[34m   6.Manage Song       \x1b[0m
    \x1b[34m   0.Log Out           \x1b[0m`

    let choiceAlbum;
    do {
        console.log(menuAlbum)
        choiceAlbum = +input.question(`\x1b[1m  Enter your selection: \x1b[0m`)
        switch (choiceAlbum) {
            case 1:
                addAlbum();
                break;
            case 2:
                renameAlbum();
                break;
            case 3:
                let selectName = input.question(`\x1b[1m  Enter Album Name: \x1b[0m`);
                findAlbum(selectName);
                break;
            case 4:
                let selectAlbum = +input.question(`\x1b[1m  Enter Album ID:  \x1b[0m`);
                showSongOnAlbum(selectAlbum);
                break;
            case 5:
                menuDeleteAlbum();
                break;
            case 6:
                managerSong();
                break;
            case 0:
                break;
        }
    } while (choiceAlbum != 0);
}

function addAlbum() {
    let frag: boolean = false;
    do {
        let id = input.question(`\x1b[1m  Enter Album ID:  \x1b[0m`);
        let nameRegex = /^[0-9]+$/;
        let testAlbumID = nameRegex.test(id);
        for (let i = 0; i < theListAlbum.listAlbum.length; i++) {
            if (theListAlbum.listAlbum[i].id == id) {
                testAlbumID = false;
                console.log(`\x1b[31m  This Album ID is already in use!! \x1b[0m `);
            }
        }
        let idAlbumDone: string;
        if (testAlbumID == false) {
            console.log(`\x1b[31m  Please re-enter Album ID !!  \x1b[0m`);
            return frag;
        } else {
            idAlbumDone = id;
        }
        let frag2: boolean = false;
        do {
            let name = input.question(`\x1b[1m  Enter Album Name:  \x1b[0m`);
            let nameRegex = /^[a-z A-Z]+$/;
            let testAlbumName = nameRegex.test(name);
            for (let i = 0; i < theListAlbum.listAlbum.length; i++) {
                if (theListAlbum.listAlbum[i].name == name) {
                    testAlbumName = false;
                    console.log(`\x1b[31m  This Album Name is already in use!! \x1b[0m `);
                }
            }
            let nameAlbumDone: string;
            let userCreat = input.question(`\x1b[1m  Enter User Name:  \x1b[0m`)
            if (testAlbumName == false) {
                console.log(`\x1b[31m  Please re-enter Album Name !!  \x1b[0m`);
            } else {
                nameAlbumDone = name;
                let album = new Album(id, nameAlbumDone,userCreat);
                theListAlbum.add(album);
                frag = true;
                frag2 = true;
                console.log(`\x1b[32m  New album has been added !!  \x1b[0m`);
            }
        } while (frag2 == false);
    } while (frag == false);

}

function renameAlbum() {
    let id = +input.question(`\x1b[1m  Enter ID Album : \x1b[0m`)
    let idUpdate = theListAlbum.findById(id);
    if (idUpdate == -1) {
        console.log(`\x1b[31m  Album ID not Found  \x1b[0m`)
    } else {
        let id = +input.question(`\x1b[1m  Enter your ID: \x1b[0m`);
        let name = input.question('\x1b[1m  Enter your Name: \x1b[0m ');
        let userCreat = input.question(`\x1b[1m  Enter User Name:  \x1b[0m`)

        theListAlbum.edit(id, new Album(id, name,userCreat))
    }
}

function findAlbum(name: string) {
    theListAlbum.findByName(name);
}

function deleteAlbum(id: number) {
    theListAlbum.deleteById(id)
}

function showSongOnAlbum(id: number) {
    let arr: Album[] = theListAlbum.findAll();
    if (arr.length == 0) {
        console.log(`\x1b[31m   This Album is Empty !!   \x1b[0m`)
    } else {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].id == id){
                console.log(arr[i].findAllSong())
            }
        }
    }
}

function menuDeleteAlbum() {
    let selectID = +input.question(`\x1b[1m  Enter Album ID: \x1b[0m`);
    let select = `\x1b[1m --Do you wanna to delete this ?? \x1b[0m \n
                \x1b[31m  1.Yes \x1b[0m
                \x1b[32m  0.No  \x1b[0m`
    let choice1;
    do {
        console.log(select)
        choice1 = +input.question(`\x1b[1m  Enter your selection:  \x1b[0m`)
        switch (choice1) {
            case 1:
                deleteAlbum(selectID);
                console.log(`\x1b[32m Delete Success  \x1b[0m`)
                return musicManager()
            case 2:
                musicManager();
                break;
        }
    } while (choice1 != 0)
}

function addSongToAlbum() {
    let id = +input.question(`\x1b[1m  Enter your Album ID: \x1b[0m`)
    let idAlbum = theListAlbum.findById(id);
    if (idAlbum == -1) {
        console.log(`\x1b[31m  Album ID not Found !!  \x1b[0m`)
    } else {
        let selectChoice = `\x1b[1m  Did u want to add new song?? \x1b[0m
                // \x1b[1m   1.Yes  \x1b[0m
                // \x1b[1m   0.No   \x1b[0m`
        let choice2;
        do {
            console.log(selectChoice)
            choice2 = +input.question(`\x1b[1m Enter your selection:  \x1b[0m`)
            switch (choice2) {
                case 1:
                    addNewSong();
                    break;
                case 2:
                    break;
            }
        } while (choice2 != 0)
    }
}

function managerSong() {
    let menuSong = `\x1b[35m  -----Song Manage-----  \x1b[0m \n
    \x1b[34m   1.Add new Song            \x1b[0m
    \x1b[34m   2.Find Song               \x1b[0m
    \x1b[34m   3.Remake Song             \x1b[0m
    \x1b[34m   4.Delete Song             \x1b[0m
    \x1b[34m   5.Show all Song           \x1b[0m
    \x1b[34m   0.Exit                    \x1b[0m`
    let choiceSong;
    do {
        console.log(menuSong)
        choiceSong = +input.question(`\x1b[01m   Enter your selection:  \x1b[0m`)
        switch (choiceSong) {
            case 1:
                addSongToAlbum();
                break;
            case 2:
                let nameSong = input.question(`\x1b[1m   Enter Song Name:   \x1b[0m`);
                findSong(nameSong);
                break;
            case 3:
                remakeSong();
                break;
            case 4:
                let songID = +input.question(`\x1b[1m   Enter Song ID:   \x1b[0m`)
                deleteSong(songID)
                break;
            case 5:
                showAllSong();
                break;
            case 0:
                break;
        }
    } while (choiceSong != 0)
}

function addNewSong() {
    let fragSong: boolean = false;
    do {
        let idSong = input.question(`\x1b[1m  Enter Song ID:  \x1b[0m`);
        let nameRegex = /^[0-9]+$/;
        let testSongID = nameRegex.test(idSong);
        for (let i = 0; i < theListSong.listSong.length; i++) {
            if (theListSong.listSong[i].id == idSong) {
                testSongID = false;
                console.log(`\x1b[31m  This Song ID is already in use!! \x1b[0m `);
            }
        }
        let idSongDone: string;
        if (testSongID == false) {
            console.log(`\x1b[31m  Please re-enter Song ID !!  \x1b[0m`);
            return fragSong;
        } else {
            idSongDone = idSong;
        }
        let fragSong2: boolean = false;
        do {
            let nameSong = input.question(`\x1b[1m  Enter Song Name:  \x1b[0m`);
            let nameRegex = /^[a-z A-Z]+$/;
            let testSongName = nameRegex.test(nameSong);
            for (let i = 0; i < theListSong.listSong.length; i++) {
                if (theListSong.listSong[i].name == nameSong) {
                    testSongName = false;
                    console.log(`\x1b[31m  This Song Name is already in use!! \x1b[0m `);
                }
            }
            let nameSongDone: string;
            if (testSongName == false) {
                console.log(`\x1b[31m  Please re-enter Song Name !!  \x1b[0m`);
            } else {
                let singer = input.question(`\x1b[1m  Enter Singer Name:  \x1b[0m`);
                let musician = input.question(`\x1b[1m  Enter Musician Name:  \x1b[0m`);
                nameSongDone = nameSong;
                let song = new Song(idSong, nameSongDone, singer, musician);
                theListSong.add(song);
                theListAlbum.findAll()[theListAlbum.findAll().length - 1].listSong.push(song);
                fragSong = true;
                fragSong2 = true;
                console.log(`\x1b[32m  New song has been added !!  \x1b[0m`);
                break;
            }
        } while (fragSong2 == false);
    } while (fragSong == false);
    theListAlbum.findAll();
}

function findSong(name: string) {
   theListSong.findByName(name);
}

function remakeSong() {
    let id = +input.question(` \x1b[1m   Enter Song ID:  \x1b[0m`)
    let songID = theListSong.findById(id);
    if (songID == -1) {
        console.log(`\x1b[31m  Song ID not found`)
    } else {
        let id = +input.question(`\x1b[1m   Enter Song ID:             \x1b[0m`)
        let name = input.question(`\x1b[1m    Enter Song Name:           \x1b[0m`)
        let singer = input.question(`\x1b[1m    Enter Performing Singer :  \x1b[0m`)
        let musician = input.question(`\x1b[1m    Enter Composer:            \x1b[0m`)

        theListSong.edit(id, new Song(id, name, singer, musician))
    }

}

function deleteSong(id: number) {
    theListSong.deleteById(id)
}

function showAllSong() {
    console.log(theListSong.showAllSong());
}

LoginMenu();
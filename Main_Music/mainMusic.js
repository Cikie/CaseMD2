"use strict";
exports.__esModule = true;
var Album_1 = require("../Model_Music/Album");
var ManagerAlbum_1 = require("../Manager_Music/ManagerAlbum");
var ManagerSong_1 = require("../Manager_Music/ManagerSong");
var AccountManange_1 = require("../Manager_Music/AccountManange");
var Account_1 = require("../Model_Music/Account");
var Song_1 = require("../Model_Music/Song");
var input = require("readline-sync");
var theListAlbum = new ManagerAlbum_1.ManagerAlbum();
var theListSong = new ManagerSong_1.ManagerSong();
var theListAccount = new AccountManange_1.AccountManange();
function LoginMenu() {
    var loginMenu = "\u001B[35m-----Login-----\u001B[0m\n\n    \u001B[1m  1.Login :  \u001B[0m\n    \u001B[1m  2.Register :  \u001B[0m\n    \u001B[1m  3.Show Account : \u001B[0m";
    var choice;
    do {
        console.log(loginMenu);
        choice = +input.question("\u001B[34m  Enter your selection: \u001B[0m");
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
        console.log("\u001B[35m-----Login-----\u001B[0m");
        var checkLogin = true;
        var userName = input.question("\u001B[1m  Enter Username: \u001B[0m");
        var passWord = input.question("\u001B[1m  Enter Password: \u001B[0m");
        for (var i = 0; i < theListAccount.listAccount.length; i++) {
            if (theListAccount.listAccount[i].username == userName && theListAccount.listAccount[i].passWord == passWord) {
                musicManager();
                checkLogin = false;
                console.log("\u001B[32m Login Success !! \u001B[0m");
            }
        }
        if (checkLogin) {
            console.log("\u001B[31m Login Failure !! \u001B[0m");
        }
    }
}
function register() {
    var flag = false;
    do {
        var userName = input.question("\u001B[1m  Enter UserName: \u001B[0m");
        var nameRegex = /^[a-zA-Z\-]+$/;
        var test = nameRegex.test(userName);
        for (var i = 0; i < theListAccount.listAccount.length; i++) {
            if (theListAccount.listAccount[i].username == userName) {
                test = false;
                console.log("\u001B[31m  This account already in use!! \u001B[0m ");
            }
        }
        var useNameDone = void 0;
        var passWordDone = void 0;
        if (test == false) {
            console.log("\u001B[31m  Please re-enter your account !!  \u001B[0m");
        }
        else {
            useNameDone = userName;
            var flag2 = false;
            do {
                var passWord = input.question("\u001B[1m Enter your PassWord: \u001B[0m\n                \u001B[34m  .Has 8 characters \u001B[0m\n                \u001B[34m  .Capital letters  \u001B[0m\n                \u001B[34m  .Has Number       \u001B[0m\n                \n                ");
                nameRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                test = nameRegex.test(passWord);
                if (test == false) {
                    console.log("\u001B[31m Please re-enter your password !! \u001B[0m");
                }
                else {
                    passWordDone = passWord;
                    var account = new Account_1.Account(useNameDone, passWordDone);
                    theListAccount.add(account);
                    flag = true;
                    flag2 = true;
                    console.log("\u001B[32m  Register Success !!  \u001B[0m");
                }
            } while (flag2 == false);
        }
    } while (flag == false);
}
function showAccount() {
    console.log(theListAccount);
}
function musicManager() {
    var menuAlbum = "\u001B[35m  -----Music Manager-----  \u001B[0m\n\n    \u001B[34m   1.Add new Album     \u001B[0m\n    \u001B[34m   2.Rename Album      \u001B[0m\n    \u001B[34m   3.Find Album        \u001B[0m\n    \u001B[34m   4.Show all Album    \u001B[0m\n    \u001B[34m   5.Delete Album      \u001B[0m\n    \u001B[34m   6.Manage Song       \u001B[0m\n    \u001B[34m   0.Exit              \u001B[0m";
    var choiceAlbum;
    do {
        console.log(menuAlbum);
        choiceAlbum = +input.question("\u001B[1m  Enter your selection: \u001B[0m");
        switch (choiceAlbum) {
            case 1:
                addAlbum();
                break;
            case 2:
                renameAlbum();
                break;
            case 3:
                var selectName = input.question("\u001B[1m  Enter Album Name: \u001B[0m");
                findAlbum(selectName);
                break;
            case 4:
                showAllAlbum();
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
    var frag = false;
    do {
        var id = input.question("\u001B[1m  Enter Album ID:  \u001B[0m");
        var nameRegex = /^[0-9]+$/;
        var testAlbumID = nameRegex.test(id);
        for (var i = 0; i < theListAlbum.listAlbum.length; i++) {
            if (theListAlbum.listAlbum[i].id == id) {
                testAlbumID = false;
                console.log("\u001B[31m  This Album ID is already in use!! \u001B[0m ");
            }
        }
        var idAlbumDone = void 0;
        if (testAlbumID == false) {
            console.log("\u001B[31m  Please re-enter Album ID !!  \u001B[0m");
            return frag;
        }
        else {
            idAlbumDone = id;
        }
        var frag2 = false;
        do {
            var name_1 = input.question("\u001B[1m  Enter Album Name:  \u001B[0m");
            var nameRegex_1 = /^[a-z A-Z]+$/;
            var testAlbumName = nameRegex_1.test(name_1);
            for (var i = 0; i < theListAlbum.listAlbum.length; i++) {
                if (theListAlbum.listAlbum[i].name == name_1) {
                    testAlbumName = false;
                    console.log("\u001B[31m  This Album Name is already in use!! \u001B[0m ");
                }
            }
            var nameAlbumDone = void 0;
            if (testAlbumName == false) {
                console.log("\u001B[31m  Please re-enter Album Name !!  \u001B[0m");
            }
            else {
                nameAlbumDone = name_1;
                var album = new Album_1.Album(id, nameAlbumDone);
                theListAlbum.add(album);
                frag = true;
                frag2 = true;
                console.log("\u001B[32m  New album has been added !!  \u001B[0m");
                var selectChoice = "\u001B[1m  Did u want to add new song?? \u001B[0m\n                \u001B[1m   1.Yes  \u001B[0m\n                \u001B[1m   0.No   \u001B[0m";
                var choice2 = void 0;
                do {
                    console.log(selectChoice);
                    choice2 = +input.question("\u001B[1m Enter your selection:  \u001B[0m");
                    switch (choice2) {
                        case 1:
                            addNewSong();
                            break;
                        case 2:
                            break;
                    }
                } while (choice2 != 0);
                break;
            }
        } while (frag2 == false);
    } while (frag == false);
}
function renameAlbum() {
    var id = +input.question("\u001B[1m  Enter ID Album : \u001B[0m");
    var idUpdate = theListAlbum.findById(id);
    if (idUpdate == -1) {
        console.log("\u001B[31m  Album ID not Found  \u001B[0m");
    }
    else {
        var id_1 = +input.question("\u001B[1m  Enter your ID: \u001B[0m");
        var name_2 = input.question('\x1b[1m  Enter your Name: \x1b[0m ');
        theListAlbum.edit(id_1, new Album_1.Album(id_1, name_2));
    }
}
function findAlbum(name) {
    theListAlbum.findByName(name);
}
function deleteAlbum(id) {
    theListAlbum.deleteById(id);
}
function showAllAlbum() {
    console.log(theListAlbum.findAll());
}
function menuDeleteAlbum() {
    var selectID = +input.question("\u001B[1m  Enter Album ID: \u001B[0m");
    var select = "\u001B[1m --Do you wanna to delete this ?? \u001B[0m \n\n                \u001B[31m  1.Yes \u001B[0m\n                \u001B[32m  0.No  \u001B[0m";
    var choice1;
    do {
        console.log(select);
        choice1 = +input.question("\u001B[1m  Enter your selection:  \u001B[0m");
        switch (choice1) {
            case 1:
                deleteAlbum(selectID);
                return musicManager();
            case 2:
                musicManager();
                break;
        }
    } while (choice1 != 0);
}
function managerSong() {
    var menuSong = "\u001B[35m  -----Song Manage-----  \u001B[0m \n\n    \u001B[34m   1.Add new Song to Album   \u001B[0m\n    \u001B[34m   2.Find Song               \u001B[0m\n    \u001B[34m   3.Remake Song             \u001B[0m\n    \u001B[34m   4.Delete Song             \u001B[0m\n    \u001B[34m   5.Show all Song           \u001B[0m\n    \u001B[34m   0.Exit                    \u001B[0m";
    var choiceSong;
    do {
        console.log(menuSong);
        choiceSong = +input.question("\u001B[01m   Enter your selection:  \u001B[0m");
        switch (choiceSong) {
            case 1:
                addNewSong();
                break;
            case 2:
                var nameSong = input.question("\u001B[1m   Enter Song Name:   \u001B[0m");
                findSong(nameSong);
                break;
            case 3:
                remakeSong();
                break;
            case 4:
                var songID = +input.question("\u001B[1m   Enter Song ID:   \u001B[0m");
                deleteSong(songID);
                break;
            case 5:
                showAllSong();
                break;
            case 0:
                break;
        }
    } while (choiceSong != 0);
}
function addNewSong() {
    var fragSong = false;
    do {
        var idSong = input.question("\u001B[1m  Enter Song ID:  \u001B[0m");
        var nameRegex = /^[0-9]+$/;
        var testSongID = nameRegex.test(idSong);
        for (var i = 0; i < theListSong.listSong.length; i++) {
            if (theListSong.listSong[i].id == idSong) {
                testSongID = false;
                console.log("\u001B[31m  This Song ID is already in use!! \u001B[0m ");
            }
        }
        var idSongDone = void 0;
        if (testSongID == false) {
            console.log("\u001B[31m  Please re-enter Song ID !!  \u001B[0m");
            return fragSong;
        }
        else {
            idSongDone = idSong;
        }
        var fragSong2 = false;
        do {
            var nameSong = input.question("\u001B[1m  Enter Song Name:  \u001B[0m");
            var nameRegex_2 = /^[a-z A-Z]+$/;
            var testSongName = nameRegex_2.test(nameSong);
            for (var i = 0; i < theListSong.listSong.length; i++) {
                if (theListSong.listSong[i].name == nameSong) {
                    testSongName = false;
                    console.log("\u001B[31m  This Song Name is already in use!! \u001B[0m ");
                }
            }
            var nameSongDone = void 0;
            if (testSongName == false) {
                console.log("\u001B[31m  Please re-enter Song Name !!  \u001B[0m");
            }
            else {
                var singer = input.question("\u001B[1m  Enter Singer Name:  \u001B[0m");
                var musician = input.question("\u001B[1m  Enter Musician Name:  \u001B[0m");
                nameSongDone = nameSong;
                var song = new Song_1.Song(idSong, nameSongDone, singer, musician);
                theListSong.add(song);
                // theListAlbum.findAll()[theListAlbum.findAll().length-1].listSong.push(song);
                theListAlbum.findAll()[theListAlbum.findAll().length - 1].listSong.forEach(function (e) {
                    console.log(e.name);
                });
                fragSong = true;
                fragSong2 = true;
                console.log("\u001B[32m  New song has been added !!  \u001B[0m");
                break;
            }
        } while (fragSong2 == false);
    } while (fragSong == false);
    theListAlbum.findAll();
}
function findSong(name) {
    theListAlbum.findByName(name);
}
function remakeSong() {
    var id = +input.question(" \u001B[1m   Enter Song ID:  \u001B[0m");
    var songID = theListSong.findById(id);
    if (songID == -1) {
        console.log("\u001B[31m  Song ID not found");
    }
    else {
        var id_2 = +input.question("\u001B[1m   Enter Song ID:             \u001B[0m");
        var name_3 = input.question("\u001B[1m    Enter Song Name:           \u001B[0m");
        var singer = input.question("\u001B[1m    Enter Performing Singer :  \u001B[0m");
        var musician = input.question("\u001B[1m    Enter Composer:            \u001B[0m");
        theListSong.edit(id_2, new Song_1.Song(id_2, name_3, singer, musician));
    }
}
function deleteSong(id) {
    theListSong.deleteById(id);
}
function showAllSong() {
    console.log(theListSong.findAll());
}
LoginMenu();

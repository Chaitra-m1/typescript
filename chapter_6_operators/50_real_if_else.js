let isloggedin = true;
let userrole = "editor";
if (isloggedin) {
    if (userrole == "admin") {
        console.log("welcome admin");
    }
    else if (userrole == "editor") {
        console.log("welcome editor");
    }
    else if (userrole == "viewer") {
        console.log("welcome viewer");
    }
    else {
        console.log("no idea u may be a guest");
    }
}
else {
    console.log("your not logged in");
}

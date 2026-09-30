let value = "5";
switch (typeof value) {
    case "number":
        console.log("number");
        break;
    case "string":
        console.log("string");
        break;
    case "boolean":
        console.log("boolean");
        break;
    case "object":
        console.log("object");
        break;
    case "undefined":
        console.log("undefined");
        break;
    default:
        console.log("not found");
        break;
}


let value2 = "5";
switch (value2) {
    case 5:
        console.log("number");
        break;
    case "5":
        console.log("string");
        break;

    default:
        console.log("not found");
        break;
}

let value3 = 0;
switch (value3) {
    case "false":
        console.log("boolean");
        break;
    case 0:
        console.log("number");
        break;
    default:
        console.log("not found");
        break;
}

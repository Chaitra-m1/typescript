let responsecode = 404;
switch (responsecode) {
    case 200:
        console.log("ok");
        break;
    case 404:
        console.log("not found");
        break;
    case 500:
        console.log("internal server error");
        break;
    default:
        console.log("invalid response code");
        break;
}
let score = 85;
switch (true) {
    case (score >= 90):
        console.log("grade A");
        break;
    case (score >= 80):
        console.log("grade B");//grade b will print
        break;
    case (score >= 70):
        console.log("grade C");
        break;
    case (score >= 60):
        console.log("grade D");
        break;
    default:
        console.log("fail");
        break;
}
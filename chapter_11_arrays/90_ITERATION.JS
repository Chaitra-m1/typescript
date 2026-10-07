let browser = ["chrome", "firefox", "edge", "safari", "opera"]

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i])
}

console.log("=========================")

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i])
    if (browser[i] === "edge") {
        console.log("Edge is removed from the list")
    }
}
for (test of browser) {
    console.log(test)
}
console.log("=========================")
browser.forEach((test, index) => {
    console.log(test, index)
});

console.log("=========================")

for (let browsers in browser) {
    console.log(browsers, "->", browser[browsers])
}
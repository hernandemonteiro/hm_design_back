import StartUp from "./StartUp";

let port = 8080;

StartUp.app.listen(port, function () {
    console.log("Starting up in port: " + port);
})
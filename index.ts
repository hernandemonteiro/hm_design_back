import StartUp from "./StartUp";

let port = 5495;

StartUp.app.listen(port, function () {
    console.log("Starting up in port: " + port);
})
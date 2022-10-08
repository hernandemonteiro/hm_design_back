import StartUp from "./src/StartUp";

const port = 8080;

StartUp.app.listen(port, function () {
  console.log("Starting up in port: " + port);
});

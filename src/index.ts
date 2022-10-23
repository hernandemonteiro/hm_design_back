import StartUp from "./StartUp";

const port = 8080;

export function startServer() {
  StartUp.app.listen(port, function () {
    console.log("Starting up in port: " + port);
  });
}
startServer();

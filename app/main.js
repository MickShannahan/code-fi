import { VibesController } from "./Controllers/VibesController.js";

class App {

  vibesController = new VibesController()
}

window["app"] = new App();

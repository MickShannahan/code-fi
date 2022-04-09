import { TimerController } from "./Controllers/TimerController.js";
import { VibesController } from "./Controllers/VibesController.js";

class App {

  vibesController = new VibesController()
  timerController = new TimerController()
}

window["app"] = new App();

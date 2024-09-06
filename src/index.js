import run from "./js/app.js";
import alertService from "./services/alert.service.js";
import calculatorService from "./services/calculator.service.js";
import jokesService from "./services/jokes.service.js";
// import "./style/global.css";
import "bootstrap";
import "./style/global2.scss";

run(alertService, calculatorService, jokesService);

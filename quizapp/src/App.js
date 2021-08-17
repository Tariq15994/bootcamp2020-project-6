"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./App.css");
var QuestionCard_1 = __importDefault(require("./components/QuestionCard"));
var quiz_service_1 = require("./services/quiz_service");
function App() {
    var _a = react_1.useState([]), quiz = _a[0], setQuiz = _a[1];
    var _b = react_1.useState(0), questionNumber = _b[0], setQuestionNumber = _b[1];
    var _c = react_1.useState(0), score = _c[0], setScore = _c[1];
    var _d = react_1.useState(false), showResult = _d[0], setShowResult = _d[1];
    var _e = react_1.useState(false), restart = _e[0], setRestart = _e[1];
    react_1.useEffect(function () {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var questions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, quiz_service_1.getQuizDetails(5, "easy")];
                        case 1:
                            questions = _a.sent();
                            // console.log(questions);
                            setQuiz(questions);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    }, []);
    var handleSubmit = function (e, userAns) {
        console.log(quiz.length);
        e.preventDefault();
        var CurrentQuestion = quiz[questionNumber];
        // console.log("Correct ans " + CurrentQuestion.correct_answer + "--user Selection :" + userAns)
        if (userAns === CurrentQuestion.correct_answer) {
            setScore(++score);
        }
        // console.log(userAns);
        if (questionNumber !== quiz.length - 1)
            setQuestionNumber(++questionNumber);
        else
            // alert("your score is "+ score +"out of " +quiz.length);
            // setQuestionNumber(0);
            // setScore(0);
            setShowResult(true);
    };
    if (!quiz.length)
        return (<h1>Loading ....</h1>);
    if (showResult) {
        return (<div>
        <h1>Quiz Result</h1>
        <p>Your score is {score} out of {quiz.length} </p>
        <button onClick={function () { return (<div>hlo</div>); }}>hwllo</button>
      </div>);
    }
    // if (showResult){
    //   return(
    //     <div>hwllo</div>
    //   )
    // }
    return (<div className="App">
      <QuestionCard_1.default options={quiz[questionNumber].option} question={quiz[questionNumber].question} callback={handleSubmit}/>

    </div>);
}
exports.default = App;
{ /* <button onClick={() => {
          return (
            <div>
              <QuestionCard
                options={quiz[questionNumber].option}
                question={quiz[questionNumber].question}
                callback={handleSubmit} />
            </div>
          )
        }}>kmsknks
          <a href="QuestionCard"> start</a>
        </button> */
}
{ /* <button onClick="">Start</button> */ }

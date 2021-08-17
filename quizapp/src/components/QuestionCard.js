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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var QuestionCard = function (_a) {
    // console.log(question,options)
    var question = _a.question, options = _a.options, callback = _a.callback;
    var _b = react_1.useState(""), selectedAns = _b[0], setSelectedAns = _b[1];
    var handleSelection = function (e) {
        // console.log()
        setSelectedAns(e.target.value);
    };
    return (<div className='question-container'>
            <div className=''>
                {question}
                </div>
            <form onSubmit={function (e) { return callback(e, selectedAns); }} action="j.php">
                {options.map(function (opt, ind) {
            return (<div key={ind}>
                            <label>
                                <input checked={selectedAns === opt} required type='radio' name="opt" value={opt} onChange={handleSelection}/>
                                {opt}
                            </label>
                            </div>);
        })}
                <input type="submit"/>
            </form>

        </div>);
};
exports.default = QuestionCard;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = void 0;
exports.deleteUSer = deleteUSer;
const forEach_js_1 = require("./forEach.js");
const axios_1 = __importDefault(require("axios"));
let api = 'https://670e5f763e71518616543f31.mockapi.io/exam';
const getApi = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(api);
        (0, forEach_js_1.get)(data);
    }
    catch (error) {
        console.error(error);
    }
});
exports.getApi = getApi;
// search
let SearchInp = document.querySelector('.SearchInp');
SearchInp.oninput = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(`${api}?name=${SearchInp.value}`);
        (0, forEach_js_1.get)(data);
    }
    catch (error) {
        console.error(error);
    }
});
// sort
let sortBy = document.querySelector('.sortBy');
sortBy.onchange = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(`${api}?sortBy=${sortBy.value}`);
        (0, forEach_js_1.get)(data);
    }
    catch (error) {
        console.error(error);
    }
});
// delete
function deleteUSer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.delete(`${api}/${id}`);
            (0, exports.getApi)();
        }
        catch (error) {
            console.error(error);
        }
    });
}

'use strict';
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
const BaseAccessToken_1 = __importDefault(require("../../Core/BaseAccessToken"));
class AccessToken extends BaseAccessToken_1.default {
    constructor() {
        super(...arguments);
        this.endpointToGetToken = 'cgi-bin/gettoken';
    }
    getCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app.config.corp_id) {
                throw new Error('Please set `corp_id` in config');
            }
            if (!this.app.config.secret) {
                throw new Error('Please set `secret` in config');
            }
            return {
                corpid: this.app.config.corp_id,
                corpsecret: this.app.config.secret,
            };
        });
    }
}
exports.default = AccessToken;

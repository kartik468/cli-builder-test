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
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
exports.default = (0, architect_1.createBuilder)((builderConfig, context) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    context.logger.info('build is starting');
    context.logger.info(builderConfig.command);
    const build = yield context.scheduleTarget({
        target: 'build',
        project: ((_a = context.target) === null || _a === void 0 ? void 0 : _a.project) || '',
        configuration: 'production'
    });
    const result = yield build.result;
    context.logger.info(JSON.stringify(build.result));
    // build.output.subscribe(output => {
    //   context.logger.info(JSON.stringify(output));
    // });
    if (result.success) {
        // get the styles file generated from above build
        context.logger.info('getting the styles css file1');
        // context.logger.info(JSON.stringify(result.target));
        // context.logger.info(JSON.stringify(result.info));
        context.logger.info(JSON.stringify(result.baseOutputPath));
        context.logger.info(JSON.stringify(result));
        return {
            success: true
        };
    }
    return {
        success: false
    };
}));
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultClient = exports.resultMethods = exports.resultPath = void 0;
exports.resultPath = 'result';
exports.resultMethods = ['find', 'get', 'create', 'patch', 'remove'];
const resultClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.resultPath, connection.service(exports.resultPath), {
        methods: exports.resultMethods
    });
};
exports.resultClient = resultClient;
//# sourceMappingURL=result.shared.js.map
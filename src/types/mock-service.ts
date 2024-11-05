export class MockService {
    create = jest.fn();
    getAll = jest.fn();
    getOne = jest.fn();

    constructor(extraFunctions: string[] = []) {
        for (const funcName of extraFunctions) {
            this[funcName] = jest.fn();
        }
    }
}
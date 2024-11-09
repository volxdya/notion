class MockModel {
    constructor(functions: string[] = []) {
        for (const funcName of functions) {
            this[funcName] = jest.fn();
        }
    }

    create = jest.fn();
    findAll = jest.fn();
    findOne = jest.fn();
    destroy = jest.fn();
}

export const mockUserModel = new MockModel();
export const mockNoteModel = new MockModel();
export const mockInviteModel = new MockModel(['destroy']);
export const mockGroupModel = new MockModel();
export const mockCommentaryModel = new MockModel();
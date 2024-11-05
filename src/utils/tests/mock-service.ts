export class MockService {
    create = jest.fn();
    getAll = jest.fn();
    getOne = jest.fn();
    getById = jest.fn();

    constructor(extraFunctions: string[] = []) {
        for (const funcName of extraFunctions) {
            this[funcName] = jest.fn();
        }
    }
}

/* TODO:
   можно потом сделать метод,
   который будет считать количество методов,
   у класса, и в целом записывать из сюда, не ручками,
   тоесть будем импортировать сюда этот массив методов и подставлять
*/

export const mockUserService = new MockService();
export const mockNoteService = new MockService(['changeStatusNote', 'getUserNotes']);
export const mockInviteService = new MockService(['deleteInvite']);
export const mockGroupService = new MockService(['addToGroup']);
export const mockCommentaryService = new MockService();
export const mockAuthService = new MockService([
    'validateUser',
    'validateUser',
    'generateToken',
    'login',
    'register'
]);
export abstract class AbstractService {
    constructor(private readonly model: any) { }

    async getAll() {
        return this.model.findAll();
    }
}
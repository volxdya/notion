import { Test, TestingModule } from '@nestjs/testing';
import { NoteService } from '../note.service';
import { NoteModel } from '../note.model';
import { getModelToken } from '@nestjs/sequelize';
import { mockNoteModel } from '../../../utils/tests/mock-model';
import { CreateNoteDto } from '../dto/CreateNoteDto';

describe('NoteService', () => {
  let service: NoteService;
  let model: typeof NoteModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NoteService,
        {
          provide: getModelToken(NoteModel),
          useValue: mockNoteModel
        }
      ],
    }).compile();

    service = module.get<NoteService>(NoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get all notes', () => {
    it('should be get all notes', async () => {
      const notes = [{
        id: 1,
        title: 'test',
        status: {
          id: 1,
          status: 'in order'
        }
      }]

      mockNoteModel.findAll.mockResolvedValue(notes);
      const result = await service.getAll();

      expect(result).toEqual(notes);
      expect(mockNoteModel.findAll).toHaveBeenCalledWith({ include: { all: true } });
    })
  })

  describe('create note', () => {
    it('should be create new note', async () => {
      const dto: CreateNoteDto = {
        groupId: 1,
        userId: 1,
        title: 'new task'
      }

      const createdNote = {
        ...dto,
        id: 1,
        status: {
          id: 1,
          status: 'In order'
        }
      };

      mockNoteModel.create.mockResolvedValue(createdNote);
      const result = await service.create(dto);

      expect(result).toEqual(createdNote);
      expect(mockNoteModel.create).toHaveBeenCalledWith(dto);
      expect(createdNote.status.id).toBeLessThan(1);
    })
  })
});

import { Test, TestingModule } from '@nestjs/testing';
import { NoteService } from '../note.service';
import { NoteModel } from '../note.model';
import { getModelToken } from '@nestjs/sequelize';

describe('NoteService', () => {
  let service: NoteService;
  let model: typeof NoteModel;

  const mockNoteModel = {
    create: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
  };

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
});

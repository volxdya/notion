import { Test, TestingModule } from '@nestjs/testing';
import { NoteController } from '../note.controller';
import { NoteService } from '../note.service';
import { MockService } from '../../../types/mock-service';

describe('NoteController', () => {
  let controller: NoteController;
  let service: NoteService;

  const mockNoteService = new MockService(['changeStatusNote', 'getUserNotes']);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteController],
      providers: [
        NoteService,
        {
          provide: NoteService,
          useValue: mockNoteService
        }
      ]
    }).compile();

    controller = module.get<NoteController>(NoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

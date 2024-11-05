import { Test, TestingModule } from '@nestjs/testing';
import { NoteController } from '../note.controller';
import { NoteService } from '../note.service';
import { mockNoteService } from '../../../utils/tests/mock-service';

describe('NoteController', () => {
  let controller: NoteController;
  let service: NoteService;

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

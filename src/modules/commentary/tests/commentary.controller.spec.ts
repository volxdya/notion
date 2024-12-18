import { Test, TestingModule } from '@nestjs/testing';
import { CommentaryController } from '../commentary.controller';
import { CommentaryService } from '../commentary.service';
import { mockCommentaryService } from '../../../utils/tests/mock-service';

describe('CommentaryController', () => {
  let controller: CommentaryController;
  let commentaryService: CommentaryService; 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentaryController],
      providers: [
        CommentaryService,
        {
          provide: CommentaryService,
          useValue: mockCommentaryService
        }
      ]
    }).compile();

    controller = module.get<CommentaryController>(CommentaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

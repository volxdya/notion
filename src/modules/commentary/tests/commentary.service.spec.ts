import { Test, TestingModule } from '@nestjs/testing';
import { CommentaryService } from '../commentary.service';
import { CommentaryModel } from '../commentary.model';
import { getModelToken } from '@nestjs/sequelize';
import { mockCommentaryModel } from '../../../utils/tests/mock-model';

describe('CommentaryService', () => {
  let service: CommentaryService;
  let commentaryModel: typeof CommentaryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentaryService,
        {
          provide: getModelToken(CommentaryModel),
          useValue: mockCommentaryModel,
        }
      ],
    }).compile();

    service = module.get<CommentaryService>(CommentaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

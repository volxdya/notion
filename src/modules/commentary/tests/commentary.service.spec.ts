import { Test, TestingModule } from '@nestjs/testing';
import { CommentaryService } from '../commentary.service';
import { CommentaryModel } from '../commentary.model';
import { getModelToken } from '@nestjs/sequelize';

describe('CommentaryService', () => {
  let service: CommentaryService;
  let commentaryModel: typeof CommentaryModel;

  let mockCommentaryModel = {
    findAll: jest.fn(),
    create: jest.fn()
  }

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

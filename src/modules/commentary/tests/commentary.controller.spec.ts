import { Test, TestingModule } from '@nestjs/testing';
import { CommentaryController } from '../commentary.controller';

describe('CommentaryController', () => {
  let controller: CommentaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentaryController],
    }).compile();

    controller = module.get<CommentaryController>(CommentaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

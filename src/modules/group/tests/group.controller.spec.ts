import { Test, TestingModule } from '@nestjs/testing';
import { GroupController } from '../group.controller';
import { GroupService } from '../group.service';

describe('GroupController', () => {
  let controller: GroupController;
  let groupService: GroupService;

  let mockGroupService = {
    getById: jest.fn(),
    create: jest.fn(),
    getAll: jest.fn(),
    addToGroup: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupController],
      providers: [
        GroupService,
        {
          provide: GroupService,
          useValue: mockGroupService
        }
      ]
    }).compile();

    controller = module.get<GroupController>(GroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

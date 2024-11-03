import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from '../group.service';
import { GroupModel } from '../group.model';
import { UserService } from '../../user/user.service';
import { InviteService } from '../../invite/invite.service';
import { getModelToken } from '@nestjs/sequelize';

describe('GroupService', () => {
  let groupService: GroupService;
  let userService: UserService;
  let inviteService: InviteService;
  let groupModel: typeof GroupModel;

  let mockGroupModel = {
    findOne: jest.fn(),
    create: jest.fn(),
    findAll: jest.fn(),
  }

  const mockUserService = {};
  const mockInviteService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupService,
        {
          provide: InviteService,
          useValue: mockInviteService
        },
        {
          provide: UserService,
          useValue: mockUserService
        },
        {
          provide: getModelToken(GroupModel),
          useValue: mockGroupModel
        }],
    }).compile();

    groupService = module.get<GroupService>(GroupService);
  });

  it('should be defined', () => {
    expect(groupService).toBeDefined();
  });
});

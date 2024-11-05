import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from '../group.service';
import { GroupModel } from '../group.model';
import { UserService } from '../../user/user.service';
import { InviteService } from '../../invite/invite.service';
import { getModelToken } from '@nestjs/sequelize';
import {
  mockInviteService,
  mockUserService
}
  from '../../../utils/tests/mock-service';
import { mockGroupModel } from '../../../utils/tests/mock-model';

describe('GroupService', () => {
  let groupService: GroupService;
  let userService: UserService;
  let inviteService: InviteService;
  let groupModel: typeof GroupModel;

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

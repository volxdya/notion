import { Test, TestingModule } from '@nestjs/testing';
import { InviteController } from '../invite.controller';
import { InviteService } from '../invite.service';

describe('InviteController', () => {
  let controller: InviteController;
  let inviteService: InviteService;

  let mockInviteService = {
    create: jest.fn(),
    getAll: jest.fn(),
    getById: jest.fn(),
    deleteInvite: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InviteController],
      providers: [{
        provide: InviteService,
        useValue: mockInviteService
      }]
    }).compile();

    controller = module.get<InviteController>(InviteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
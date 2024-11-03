import { Test, TestingModule } from '@nestjs/testing';
import { InviteService } from '../invite.service';
import { InviteModel } from '../invite.model';
import { getModelToken } from '@nestjs/sequelize';

describe('InviteService', () => {
  let service: InviteService;
  let model: typeof InviteModel;

  let mockInviteModel = {
    findAll: jest.fn(),
    fineOne: jest.fn(),
    create: jest.fn(),
    destroy: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InviteService,
        {
          provide: getModelToken(InviteModel),
          useValue: mockInviteModel
        }
      ],
    }).compile();

    service = module.get<InviteService>(InviteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
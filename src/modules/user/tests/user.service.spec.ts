import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import { getModelToken } from '@nestjs/sequelize';
import { CreateUserDto } from '../dto/CreateUserDto';
import { mockUserModel } from '../../../utils/tests/mock-model';

describe('UserService', () => {
  let service: UserService;
  let model: typeof UserModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(UserModel),
          useValue: mockUserModel
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    model = module.get<typeof UserModel>(getModelToken(UserModel));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create new user', () => {
    it('should be create a new user', async () => {
      const dto: CreateUserDto = {
        avatarUrl: 'http://notion-files-api/user/1',
        userName: 'testusername',
        password: 'zxc@@qweq'
      }

      const createdUser = { ...dto, id: 1 };
      mockUserModel.create.mockResolvedValue(createdUser);

      const result = await service.create(dto);
      expect(result).toEqual(createdUser);
      expect(mockUserModel.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('get user by id', () => {
    it('should be find one user by id', async () => {
      const userId: number = 1;
      const foundUser = {
        id: userId,
        userName: 'testusername',
        password: 'testpassword@',
        avatarUrl: '123'
      }

      mockUserModel.findOne.mockResolvedValue(foundUser);
      const result = await service.getById(userId);
      expect(result).toEqual(foundUser);
      expect(mockUserModel.findOne).toHaveBeenCalledWith({ where: { id: userId }, include: { all: true } });
    });
  });

  describe('get all', () => {
    it('should be get all users', async () => {
      const users = [
        {
          id: 1,
          userName: 'testusername1',
          password: 'testpassword1',
          avatarUrl: ''
        },
        {
          id: 2,
          userName: 'testusername2',
          password: 'testpassword2',
          avatarUrl: ''
        },
      ];

      mockUserModel.findAll.mockResolvedValue(users);
      const result = await service.getAll();
      expect(result).toEqual(users);
      expect(mockUserModel.findAll).toHaveBeenCalledWith({ include: { all: true } });
    })
  })
});

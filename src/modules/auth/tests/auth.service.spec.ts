import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { mockUserModel } from '../../../utils/tests/mock-model';
import { getModelToken } from '@nestjs/sequelize';
import { UserModel } from '../../../modules/user/user.model';
import { mockAuthService, mockUserService } from '../../../utils/tests/mock-service';
import { CreateUserDto } from '../../../modules/user/dto/CreateUserDto';

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;
  let jwtService: JwtService;

  let mockJwtService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        UserService,
        {
          provide: AuthService,
          useValue: mockAuthService
        },

        {
          provide: JwtService,
          useValue: mockJwtService
        },
        {
          provide: UserService,
          useValue: mockUserService
        },
        {
          provide: getModelToken(UserModel),
          useValue: mockUserModel
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
    expect(userService).toBeDefined();
    expect(jwtService).toBeDefined();
  });

  describe('logjn', () => {
    it('should be generate token', async () => {
      const userId: number = 1;

      const loginUser = {
        id: userId,
        userName: 'testUser',
        password: 'qwertyzxc',
        avatarUrl: 'http://notion-api/files/avatars/user/?userId=1'
      }

      mockUserModel.findOne.mockResolvedValue(loginUser);
      const result = await userService.getById(userId);

      expect(result).toEqual(loginUser);
      expect(mockUserModel.findOne).toHaveBeenCalledWith({
        where: { id: userId },
        include: { all: true }
      });

      const dto: CreateUserDto = {
        userName: 'testUser',
        password: 'qwertyzxc',
        avatarUrl: 'pizdec'
      }

      const token = await authService.login(dto);

      expect(loginUser.password === dto.password).toBeTruthy();
      expect(authService.login).toHaveBeenCalledWith(dto);
    })
  })
});

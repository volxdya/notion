import { Test, TestingModule } from '@nestjs/testing';
import { NoteService } from '../note.service';
import { INoteStatus, NoteModel, noteStatutes } from '../note.model';
import { getModelToken } from '@nestjs/sequelize';
import { mockNoteModel } from '../../../utils/tests/mock-model';
import { CreateNoteDto } from '../dto/CreateNoteDto';

describe('NoteService', () => {
  let service: NoteService;
  let model: typeof NoteModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NoteService,
        {
          provide: getModelToken(NoteModel),
          useValue: mockNoteModel
        }
      ],
    }).compile();

    service = module.get<NoteService>(NoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get all notes', () => {
    it('should be get all notes', async () => {
      const notes = [{
        id: 1,
        title: 'test',
        status: {
          id: 1,
          status: 'in order'
        }
      }]

      mockNoteModel.findAll.mockResolvedValue(notes);
      const result = await service.getAll();

      expect(result).toEqual(notes);
      expect(mockNoteModel.findAll).toHaveBeenCalledWith({ include: { all: true } });
    })
  })

  describe('create note', () => {
    it('should be create new note', async () => {
      const dto: CreateNoteDto = {
        groupId: 1,
        userId: 1,
        title: 'new task'
      }

      const createdNote = {
        ...dto,
        id: 1,
        status: {
          id: 1,
          status: 'In order'
        }
      };

      mockNoteModel.create.mockResolvedValue(createdNote);
      const result = await service.create(dto);

      expect(result).toEqual(createdNote);
      expect(mockNoteModel.create).toHaveBeenCalledWith(dto);
      expect(createdNote.status.id).toBeLessThan(5);
    })
  });

  describe('get one note', () => {
    it('should be get one note', async () => {
      const noteId: number = 1;

      const createdNote = {
        id: noteId,
        title: 'test',
        status: {
          id: 1,
          status: 'in order'
        }
      }

      mockNoteModel.findOne.mockResolvedValue(createdNote);
      const result = await service.getById(noteId);

      expect(result).toEqual(createdNote);
      expect(mockNoteModel.findOne).toHaveBeenCalledWith(
        {
          include: { all: true },
          where: { id: noteId }
        }
      )
    })
  });

  describe('change note status', () => {
    it('should be change note status', async () => {
      const noteId: number = 1;
      const statuses: INoteStatus[] = noteStatutes;

      const createdNote = {
        id: noteId,
        title: 'test',
        status: {
          id: 1,
          status: 'in order'
        },
        // функция, имитирующая update из Sequalize, поскольку findOne не отдает update метод
        update: jest.fn().mockImplementation(function (updateData) {
          this.status = updateData.status;
          return Promise.resolve(this);
        }),
      }

      // Ниже проверка на то, что одна таска нашлась и была вызвана с помощью нашего конфига
      mockNoteModel.findOne.mockResolvedValue(createdNote);
      const result = await service.getById(noteId);

      const findNoteConfig = {
        where: { id: noteId },
        include: { all: true }
      }

      expect(result).toEqual(createdNote);
      expect(mockNoteModel.findOne).toHaveBeenCalledWith(findNoteConfig);

      // Обновление статуса таски
      const oldStatus = result.status.id;

      await result.update({
        status: statuses[result.status.id]
      })

      const newStatus = result.status.id;

      // Проверяем то, что старый статус меньше, чем новый
      expect(oldStatus).toBeLessThan(newStatus);

      // Проверка на то, что наша функция вызвана с переданным старым статусом
      expect(result.update).toHaveBeenCalledWith({
        status: statuses[oldStatus]
      });
    })
  });

  describe('get user notes', () => {
    it('should be get a user notes', async () => {
      const userId: number = 1;

      const groups = [
        {
          id: 1,
          title: "qweqweqweqwe",
          userId: 1,
          groupId: null,
          status: {
            id: 1,
            status: "In order"
          },
        },
        {
          id: 2,
          title: "qweqweqweqwe",
          userId: 1,
          groupId: null,
          status: {
            id: 1,
            status: "In order"
          },
        },
        {
          id: 3,
          title: "qweqweqweqwe",
          userId: 1,
          groupId: null,
          status: {
            id: 1,
            status: "In order"
          },
        },
      ];

      mockNoteModel.findAll.mockResolvedValue(groups);
      const result = await service.getUserNotes(userId);

      const fakeStatusNotes: boolean[] =
        result.map((item) => item.status.id > 4)
          .filter((item) => item != false);

      expect(fakeStatusNotes.length).toBeLessThan(1);
      expect(result).toEqual(groups);
      expect(mockNoteModel.findAll).toHaveBeenCalledWith({
        where: {
          userId: 1,
          groupId: null
        },
      });
    })
  });
});

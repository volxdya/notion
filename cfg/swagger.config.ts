import { DocumentBuilder } from "@nestjs/swagger";

export const SWAGGER_CONFIG = new DocumentBuilder()
    .setTitle('Notion')
    .setDescription('Application for notes, similar to Kanban, which you can share with your friends, work on them together, see the progress of their completion, write comments, view reporting and much more')
    .setVersion('1.0')
    .addTag('Notes')
    .build();
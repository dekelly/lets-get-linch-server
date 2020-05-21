import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { CommentsController } from './comments/comments.controller';
import { EventsController } from './events/events.controller';
import { RecommendationsController } from './recommendations/recommendations.controller';
import { SessionsController } from './sessions/sessions.controller';
import { TestController } from './test/test.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, CommentsController, EventsController, RecommendationsController, SessionsController, TestController],
  providers: [AppService, UsersService],
})
export class AppModule {}

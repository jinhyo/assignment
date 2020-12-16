import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MemosModule } from './memos/memos.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'test'),
        DB_NAME: Joi.string().required(),
        DB_OWNER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),

    DatabaseModule,
    AuthModule,
    MemosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

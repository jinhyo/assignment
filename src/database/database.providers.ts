import { Sequelize } from 'sequelize-typescript';

import { Memo } from 'src/memos/entities/memo.entity';
import { User } from '../auth/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.DB_OWNER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      sequelize.addModels([User, Memo]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

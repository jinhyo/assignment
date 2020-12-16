import { Column, HasMany, Model, Table } from 'sequelize-typescript';

import { Memo } from 'src/memos/entities/memo.entity';

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false,
    unique: true,
  })
  nickname: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @HasMany(() => Memo)
  memos: Memo[];
}

import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { User } from 'src/auth/entities/user.entity';

@Table
export class Memo extends Model<Memo> {
  @Column({
    allowNull: false,
  })
  title: string;

  @Column({
    allowNull: false,
  })
  description: string;

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  secret: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}

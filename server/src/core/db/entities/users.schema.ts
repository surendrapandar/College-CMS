import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { User, UserGenderType, UserRole } from 'src/types/users';

const modelName = 'User';

@Table({ modelName })
export class UserModel extends Model implements User {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column({ allowNull: false })
  phoneNumber: string;

  @Column({ allowNull: false })
  dateOfBirth: Date;

  @Column({ allowNull: false })
  address: string;

  @Column({ allowNull: false })
  gender: UserGenderType;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  avatarUrl: string;

  @Column({ allowNull: true })
  deletedAt: Date;

  @Column({ allowNull: false })
  role: UserRole;
}

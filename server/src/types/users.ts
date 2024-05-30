export type UserRole = 'Admin' | 'Student' | 'Teacher';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  address: string;
  gender: UserGenderType;
  email: string;
  avatarUrl: string;
  deletedAt: Date;
  role: UserRole;
}

export type UserGenderType = 'Male' | 'Female';

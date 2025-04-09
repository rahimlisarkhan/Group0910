export type Status = 'active' | 'inactive' | 'pending'; //union

type Role = ['admin', 'user', 'guest']; //tuple

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export type UserAddress = {
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
};

export type Profile = {
  name: string;
  age: number;
  email: string;
  status: Status;
  createdAt: Date;
  imgData: unknown;
  gender: Gender;
  gallery: (string | null)[];
  isActive: boolean;
  isAdmin: boolean;
  img_url: string | null;
  role: Role;
  address: UserAddress;
};

// type CssTypes = {
//   [key: string]: string | number | undefined;
// };

// Axios -> Zuntand-> Account

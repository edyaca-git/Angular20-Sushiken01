export type Role = 'ADMIN' | 'MANAGER' | 'USER' | 'WAITER';

export interface User {
  id: number;
  username: string;
  fullName: string;
  role: Role;
  avatar?: string;
  branch?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  roles?: Role[];
}

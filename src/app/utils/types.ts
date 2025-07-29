export type signinType = {
  identifier: string;
  password: string;
};

export type signinResponse = {
  message: string;
  role: string;
};

export type messageResponse = {
  message: string;
};
export type statisticType = {
  numberAccount: number;
  numberActiveAccount: number;
  numberAnnouncement: number;
  numberArchiveAnnouncement: number;
};
export type userType = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;

  isActive: boolean;
  email: string;
  gdpr: boolean;
  createdAt: Date;
  updatedAt: Date;
};
export type getUsersResponse = {
  data: userType[];
  totalUser: number;
  isEndList: boolean;
};

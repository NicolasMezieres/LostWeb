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
export type announcementSearchResponse = {
  data: announcementType[];
  total: number;
  isEndList: boolean;
};
export type announcementSearchType = {
  search: string;
  isLost: boolean | null;
  fromDate: string;
  toDate: string;
  page: number;
};
export type categoryType = {
  id: number;
  name: string;
};
export type announcementType = {
  id: string;
  name: string;
  picture: string | null;
  dateLostOrFound: string;
  user: {
    username: string;
  };
};
export type announcementByIdType = {
  name: string;
  picture: string | null;
  category: {
    name: string;
  };
  description: string;
  latitude: number;
  longitude: number;
  dateLostOrFound: string;
  user: {
    username: string;
  };
  isArchive: boolean;
};
export type announcementByIdResponse = {
  data: announcementByIdType;
};

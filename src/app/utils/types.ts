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

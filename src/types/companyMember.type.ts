export type TRolenDepartment = {
  id: number;
  code: string;
  name: string;
};

export type TCompanyMember = {
  id: number;
  type: string;
  fistName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dob: string;
  profilePicture: string;
  roles: TRolenDepartment[];
  departements: TRolenDepartment[];
};

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type userDataType = {
    userName: string;
    profileImg: string;
    summary: string;
    first_name: string;
    last_name: string;
    country: string;
    email: string;
    phone: string;
};

type PROPS = {
  userData: Partial<userDataType>;
  setProfileData: (value: userDataType) => void;
};

const globalStore = create(
  persist<PROPS>(
    (set) => ({
      userData: {},
      setProfileData: (userData) => set({ userData: userData }),
    }),
    {
      name: "app-storage",
    }
  )
);

export default globalStore;

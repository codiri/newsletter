"use client";

import { createContext, useContext, useState } from "react";
import type { User } from "@/types/user";
import { USER_WITH_MULTIPLE_SUBSCRIPTION } from "@/mocks/user";

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = { children: React.ReactNode; initUser?: User };

export function UserProvider({
  children,
  initUser = USER_WITH_MULTIPLE_SUBSCRIPTION,
}: UserProviderProps) {
  const [user, setUser] = useState<User>(initUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

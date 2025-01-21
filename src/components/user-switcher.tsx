"use client";

import { useUser } from "@/contexts/user-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "@/mocks/user";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function UserSwitcher({
  className,
}: Pick<ComponentProps<"div">, "className">) {
  const { user, setUser } = useUser();

  const users = [
    { label: "User with One Subscription", value: USER_WITH_ONE_SUBSCRIPTION },
    {
      label: "User with Multiple Subscriptions",
      value: USER_WITH_MULTIPLE_SUBSCRIPTION,
    },
    { label: "User without Subscription", value: USER_WITHOUT_SUBSCRIPTION },
  ];

  const handleChangeUser = (id: string) => {
    const selectedUser = users.find((u) => u.value.id === id);
    if (selectedUser) {
      setUser(selectedUser.value);
    }
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="text-sm font-medium hidden sm:inline">Simulate as:</span>
      <Select value={user.id} onValueChange={handleChangeUser}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a user type" />
        </SelectTrigger>

        <SelectContent>
          {users.map((user) => (
            <SelectItem key={user.value.id} value={user.value.id}>
              {user.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

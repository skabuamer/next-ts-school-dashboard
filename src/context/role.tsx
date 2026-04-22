"use client";
import { Role } from "@/components/Menu";
import { createContext, useContext, useState } from "react";

type RoleContextType = {
	role: Role;
	setRole: (role: Role) => void;
};

const RoleContext = createContext<RoleContextType | null>(null);

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
	const [role, setRole] = useState<Role>("admin");

	return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>;
};

export const useRole = () => {
	const context = useContext(RoleContext);
	if (!context) throw new Error("useRole must be used within RoleProvider");
	return context;
};

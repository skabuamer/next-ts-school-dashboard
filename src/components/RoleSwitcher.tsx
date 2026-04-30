"use client";
import type { Role } from "../components/Menu";
import { useRole } from "../context/role";

const RoleSwitcher = () => {
	const { role, setRole } = useRole();

	return (
		<div className="border border-gray-300 rounded-lg p-2">
			<label>Switch Role: </label>
			<select value={role} onChange={(e) => setRole(e.target.value as Role)} className="outline-none">
				<option value="admin">Admin</option>
				<option value="teacher">Teacher</option>
				<option value="student">Student</option>
				<option value="parent">Parent</option>
			</select>
		</div>
	);
};

export default RoleSwitcher;

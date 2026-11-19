export interface UserDetails {
  name: string;
  role: string;
}

export default function getUserDetails(): UserDetails {
  console.log("here");
  return {
    name: "john",
    role: "software engineer",
  };
}
export async function getAllUsers() {
  return [
    {
      name: "john",
      role: "software engineer",
    },
    {
      name: "johny",
      role: "senior software engineer",
    },
    {
      name: "mohan",
      role: "software engineer",
    },
  ];
}

export async function getAllRoles() {
  return ["software engineer", "senior software engineer"];
}

export async function getAllUserNames() {
  throw new Error("failed")
}
//named export import {}
//using default keyword make to export the specific one

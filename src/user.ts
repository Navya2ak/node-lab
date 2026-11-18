export interface UserDetails {
  name: string;
  role: string;
}

export default function getUserDetails(): UserDetails {
  console.log("here");
  return {
    name: "Navya",
    role: "BE",
  };
}

//named export import {}
//using default keyword make to export the specific one
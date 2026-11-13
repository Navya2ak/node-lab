interface UserDetails {
  name: string;
  role: string;
}

function getUserDetails(): UserDetails {
    console.log("here")
  return {
    name: "Navya",
    role: "BE",
  };
}

module.exports = getUserDetails;

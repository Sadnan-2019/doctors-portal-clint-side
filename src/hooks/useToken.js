import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    // console.log("inside user",user)
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://secure-thicket-56846.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("inside dtata", data);

          const accessToken = data.token;
          console.log(accessToken);
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};
export default useToken;

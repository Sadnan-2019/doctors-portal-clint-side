import React from "react";
import { useWatch } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  let i = 1;
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://secure-thicket-56846.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3>All users :{users.length}</h3>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <UserRow
                key={user._id}
                user={user}
                i={i}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

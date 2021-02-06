import React from "react";
import UsersSection from "components/UsersSection";
import { requireAuth } from "util/auth.js";
import { updateUser } from "util/db.js";
import { useAuth } from "util/auth.js";

function ProfilesPage(props) {
  const auth = useAuth();

  return (
    <>
      <UsersSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Users"
        subtitle=""
      />
      <div>{auth.user.firm}</div>
      <button
        onClick={() => {
          const randomInt = Math.floor(Math.random() * 100);
          updateUser(auth.user.uid, { firm: `bigCap-${randomInt}` });
        }}
      >
        CLICK TO UPDATE SOMETHING
      </button>
    </>
  );
}

export default requireAuth(ProfilesPage);

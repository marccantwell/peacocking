import React from "react";
import UsersSection from "components/UsersSection";
import { requireAuth } from "util/auth.js";

function ProfilesPage(props) {
  return (
    <UsersSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Featured Users"
      subtitle=""
    />
  );
}

export default requireAuth(ProfilesPage);

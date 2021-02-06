import React from "react";
import StatsSection from "components/StatsSection";
import Deals from "components/Deals";
import FeaturesSection2 from "components/FeaturesSection2";
import TestimonialsSection2 from "components/TestimonialsSection2";
import EditStats from "components/EditStats";
import { useAuth, requireAuth } from "util/auth.js";
import { useRouter } from "next/router";

function ProfilesPage2(props) {
  const auth = useAuth();

  const router = useRouter();

  return (
    <>
      <StatsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />
      <Deals
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Deals"
        subtitle=""
      />
      <FeaturesSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />
      <TestimonialsSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />

      {auth.user.uid === router.query.id && (
        <EditStats
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
        />
      )}
    </>
  );
}

export default requireAuth(ProfilesPage2);

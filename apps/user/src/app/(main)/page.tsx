import React from "react";
import Navbar from "@repo/ui/common/Navbar";
import Hero from "../../components/landing/Hero";
import Help from "../../components/landing/Help/Help";
import Footer from "../../components/landing/Footer/Footer";

function page() {
  return (
    <>
      <div className="shadow">
        <Navbar
          imageHeight={50}
          imageWidth={200}
          linkTitle="Are you a Comapany?"
          loginLink="/login"
          signupLink="/signup"
          src=""
        />
      </div>
      <Hero />
      <Help />
      <div className="bg-gray-900">
        <Footer/>
      </div>
    </>
  );
}

export default page;

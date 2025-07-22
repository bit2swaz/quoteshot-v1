import React from "react";
import UserOnboarding from "@/components/UserOnboarding";
import CanvasComponent from "@/components/Canvas";

const AppEditorPage: React.FC = () => {
  return (
    <UserOnboarding>
      <CanvasComponent />
    </UserOnboarding>
  );
};

export default AppEditorPage;

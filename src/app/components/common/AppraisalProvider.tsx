"use client";

import { createContext, useContext, useState } from "react";
import { AppraisalPopup } from "./AppraisalPopup";

type AppraisalContextValue = {
  open: (skipLocationStep?: boolean) => void;
};

const AppraisalContext = createContext<AppraisalContextValue>({
  open: () => {},
});

export function useAppraisal() {
  return useContext(AppraisalContext);
}

export function AppraisalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [skipLocation, setSkipLocation] = useState(false);

  const open = (skipLocationStep = false) => {
    setSkipLocation(skipLocationStep);
    setIsOpen(true);
  };

  return (
    <AppraisalContext.Provider value={{ open }}>
      {children}
      <AppraisalPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        skipLocationStep={skipLocation}
      />
    </AppraisalContext.Provider>
  );
}

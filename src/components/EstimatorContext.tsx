"use client";

import React, { createContext, useContext, useState } from "react";

interface EstimatorContextType {
  isEstimatorOpen: boolean;
  setIsEstimatorOpen: (open: boolean) => void;
}

const EstimatorContext = createContext<EstimatorContextType | undefined>(undefined);

export function EstimatorProvider({ children }: { children: React.ReactNode }) {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  return (
    <EstimatorContext.Provider value={{ isEstimatorOpen, setIsEstimatorOpen }}>
      {children}
    </EstimatorContext.Provider>
  );
}

export function useEstimator() {
  const context = useContext(EstimatorContext);
  if (!context) {
    throw new Error("useEstimator must be used within an EstimatorProvider");
  }
  return context;
}

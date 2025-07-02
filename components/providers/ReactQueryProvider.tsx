"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useRef } from "react";

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClientRef = useRef<QueryClient | null>(null);

  if (!queryClientRef.current) queryClientRef.current = new QueryClient();

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
};

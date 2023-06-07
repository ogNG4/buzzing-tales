import React from "react";

export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto mt-4 w-full  flex-col space-y-16 px-4 lg:px-0">
      {children}
    </main>
  );
}
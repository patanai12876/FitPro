import { Suspense } from "react";
import ContactPageClient from "./ContactPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPageClient />
    </Suspense>
  );
}
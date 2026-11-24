import CartBrowser from "@/components/CartBrowser";
import { Suspense } from "react";

export default function cartPage() {
  return (
    <main className="h-[60vh] mb-48">
      <Suspense fallback={null}>
        <CartBrowser />
      </Suspense>
    </main>
  );
}

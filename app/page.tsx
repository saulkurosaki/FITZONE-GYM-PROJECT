import { Suspense, lazy } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LoadingFallback } from "@/components/loading-fallback";

// Lazy load componentes pesados
const ServicesSection = lazy(() =>
  import("@/components/services-section").then((mod) => ({
    default: mod.ServicesSection,
  }))
);
const ScheduleSection = lazy(() =>
  import("@/components/schedule-section").then((mod) => ({
    default: mod.ScheduleSection,
  }))
);
const TestimonialsSection = lazy(() =>
  import("@/components/testimonials-section").then((mod) => ({
    default: mod.TestimonialsSection,
  }))
);
const CtaSection = lazy(() =>
  import("@/components/cta-section").then((mod) => ({
    default: mod.CtaSection,
  }))
);
const Footer = lazy(() =>
  import("@/components/footer").then((mod) => ({ default: mod.Footer }))
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#17191A]">
      <Header />
      <main>
        <HeroSection />

        <Suspense fallback={<LoadingFallback height="400px" />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback height="400px" />}>
          <ScheduleSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback height="400px" />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback height="400px" />}>
          <CtaSection />
        </Suspense>
      </main>

      <Suspense fallback={<LoadingFallback height="300px" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

import ErrorBoundary from "./ErrorBoundary";
import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";



function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <>
        <ErrorBoundary>
        <SectionOne />
        </ErrorBoundary>

        <ErrorBoundary>
        <SectionTwo />
        </ErrorBoundary>

        <ErrorBoundary>
        <Location />
        </ErrorBoundary>
        </>
      </div>
    </section>
  );
}

export default Main;

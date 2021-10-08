import { GraduationProvider } from "./ Graduation/graduation";
import { ConfraternizationProvider } from "./Confraternization/confraternization";
import { HomeBeersProvider } from "./HomeBeers/homeBeers";
import { WeddingProvider } from "./Wedding/wedding";

const Providers = ({ children }) => {
  return (
    <HomeBeersProvider>
      <GraduationProvider>
        <WeddingProvider>
          <ConfraternizationProvider>{children}</ConfraternizationProvider>
        </WeddingProvider>
      </GraduationProvider>
    </HomeBeersProvider>
  );
};

export default Providers;

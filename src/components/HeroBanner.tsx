import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-4">
      <div className="relative rounded-2xl overflow-hidden h-36 sm:h-48">
        <img
          src={heroBanner}
          alt="Fresh groceries delivered in minutes"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex items-center">
          <div className="px-6 sm:px-10">
            <h1 className="font-display text-xl sm:text-3xl font-bold text-primary-foreground leading-tight">
              Groceries delivered<br />in 10 minutes
            </h1>
            <p className="text-primary-foreground/80 text-xs sm:text-sm mt-1">
              Fresh fruits, veggies & daily essentials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

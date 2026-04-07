import logoImage from "@/assets/audax-logo.png";

type BrandLogoProps = {
  iconClassName?: string;
  textSizeClassName?: string;
  subtextSizeClassName?: string;
};

const BrandLogo = ({
  iconClassName = "h-9 w-auto",
  textSizeClassName = "text-2xl",
  subtextSizeClassName = "text-xs",
}: BrandLogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logoImage}
        alt="Logo da Audax Gym"
        className={`${iconClassName} object-contain shrink-0`}
        loading="eager"
      />
      <div className="flex items-end">
        <span className={`font-display tracking-wider text-foreground leading-none ${textSizeClassName}`}>
          AUDAX
        </span>
        <span className={`text-muted-foreground tracking-[0.3em] ml-2 leading-none ${subtextSizeClassName}`}>
          GYM
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;

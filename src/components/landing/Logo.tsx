import altrivaLogo from "@/assets/altriva.png";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-10 w-auto" }: LogoProps) {
  return <img src={altrivaLogo} alt="ALTRIVA" className={className} />;
}

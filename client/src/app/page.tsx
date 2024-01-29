
import LoginCard from "@/components/ui/cards/login/LoginCard";
import LoginLink from "@/components/ui/links/LoginLink";

export default function Home():JSX.Element {
  return (
     <LoginCard isHome>
       <LoginLink isHome />
     </LoginCard>
  )
};
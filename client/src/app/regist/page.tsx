import LoginCard from "@/components/ui/cards/login/LoginCard";
import LoginLink from "@/components/ui/links/LoginLink";


export default function Regist():JSX.Element {
  return (
    <LoginCard isHome={false}>
      <LoginLink isHome={false} />
    </LoginCard>
  )
};
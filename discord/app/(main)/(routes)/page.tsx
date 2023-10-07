import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      This is a protected route
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

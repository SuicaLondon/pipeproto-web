import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      hello
    </div>
  );
}

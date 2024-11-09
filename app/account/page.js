import { auth } from "../_lib/auth";

export const metadata = {
  title: "account",
};

export default async function Page() {
  const name = await auth();
  console.log(name);

  const firstName = name.user.name.split(" ").at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Hallo , {firstName}
    </h2>
  );
}

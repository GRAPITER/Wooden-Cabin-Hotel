"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function updateGuest(formData) {
  const session = await auth();

  if (!session) throw new Error("you must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const { data, error } = await supabase
    .from("guests")
    .update({ nationalID, nationality, countryFlag })
    .eq("id", session.user.guestId)
    .select();

  if (error) throw new Error("there is error in updating guests");

  revalidatePath("account/profile");
}

export async function deleteGuest(bookingId) {
  const session = await auth();

  if (!session) throw new Error("you must be logged in");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  revalidatePath("account/reservation");
}

export default async function action() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signoutAction() {
  await signOut({
    redirectTo: "/",
  });
}

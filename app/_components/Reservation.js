import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

export default async function Reservation({ cabin }) {
  const session = await auth();
  const setting = await getSettings();
  const bookedDatesCabin = await getBookedDatesByCabinId(cabin.id);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        setting={setting}
        bookedDatesCabin={bookedDatesCabin}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

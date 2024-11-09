import FormContainer from "@/app/_components/_romrelated/FormContainer";
import SubmitButton from "@/app/_components/_romrelated/SubmitButton";
import { editBookingId, getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  // CHANGE
  const booking = await getBooking(params.bookingId);
  const cabin = await getCabin(booking.cabinId);
  const reservationId = params.bookingId;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <FormContainer
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
        action={editBookingId}
      >
        <div className="space-y-2">
          <input type="hidden" name="bId" value={reservationId} />
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: cabin.maxCapacity }, (_, i) => i + 1).map(
              (x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? "guest" : "guests"}
                </option>
              )
            )}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            id="observations"
            name="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>
        <SubmitButton />
        <div className="flex justify-end items-center gap-6"></div>
      </FormContainer>
    </div>
  );
}
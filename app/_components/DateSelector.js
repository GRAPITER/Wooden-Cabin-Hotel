"use client";

//main version

import { differenceInDays, isPast, isWithinInterval } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

// function isAlreadyBooked(range, datesArr) {
//   return (
//     range.from &&
//     range.to &&
//     datesArr.some((date) =>
//       isWithinInterval(date, { start: range.from, end: range.to })
//     )
//   );
// }

function DateSelector({ setting, cabin, bookedDatesCabin }) {
  const { range, setRange, resetRange } = useReservation();
  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(range.to, range.from);

  // CHANGE

  const cabinPrice = numNights * (regularPrice - discount);
  // const range = { from: null, to: null };

  // SETTINGS

  const { minBookingLength, maxBookingLength } = setting;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        selected={range}
        onSelect={setRange}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;

//chatGPT VERSION

// import { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// function DateSelector() {
//   const [range, setRange] = useState({ from: undefined, to: undefined });

//   // CHANGE
//   const regularPrice = 23;
//   const discount = 23;
//   const numNights = 23;
//   const cabinPrice = 23;

//   // SETTINGS
//   const minBookingLength = 1;
//   const maxBookingLength = 23;

//   const today = new Date();
//   const fiveYearsFromNow = new Date();
//   fiveYearsFromNow.setFullYear(today.getFullYear() + 5);

//   const onSelect = (selectedRange) => {
//     setRange(selectedRange);
//   };

//   return (
//     <div className="flex flex-col justify-between">
//       <DayPicker
//         className="pt-12 place-self-center"
//         mode="range"
//         selected={range}
//         onSelect={onSelect}
//         numberOfMonths={2}
//         captionLayout="dropdown"
//         disabled={{
//           before: today,
//           after: fiveYearsFromNow,
//         }}
//       />

//       <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
//         <div className="flex items-baseline gap-6">
//           <p className="flex gap-2 items-baseline">
//             {discount > 0 ? (
//               <>
//                 <span className="text-2xl">${regularPrice - discount}</span>
//                 <span className="line-through font-semibold text-primary-700">
//                   ${regularPrice}
//                 </span>
//               </>
//             ) : (
//               <span className="text-2xl">${regularPrice}</span>
//             )}
//             <span className="">/night</span>
//           </p>
//           {numNights ? (
//             <>
//               <p className="bg-accent-600 px-3 py-2 text-2xl">
//                 <span>&times;</span> <span>{numNights}</span>
//               </p>
//               <p>
//                 <span className="text-lg font-bold uppercase">Total</span>{" "}
//                 <span className="text-2xl font-semibold">${cabinPrice}</span>
//               </p>
//             </>
//           ) : null}
//         </div>

//         {range.from || range.to ? (
//           <button
//             className="border border-primary-800 py-2 px-4 text-sm font-semibold"
//             onClick={() => setRange({ from: undefined, to: undefined })}
//           >
//             Clear
//           </button>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default DateSelector;

//cloude version

// import React from "react";
// import { DayPicker } from "react-day-picker";
// import { addDays } from "date-fns";
// import "react-day-picker/dist/style.css";

// function DateSelector() {
//   // CHANGE
//   const regularPrice = 23;
//   const discount = 23;
//   const numNights = 23;
//   const cabinPrice = 23;
//   const [range, setRange] = React.useState();

//   // SETTINGS
//   const minBookingLength = 1;
//   const maxBookingLength = 23;

//   const resetRange = () => setRange(undefined);

//   const disabledDays = [
//     { before: new Date() },
//     { before: addDays(new Date(), minBookingLength) },
//     { after: addDays(new Date(), maxBookingLength) },
//   ];

//   return (
//     <div className="flex flex-col justify-between">
//       <DayPicker
//         className="pt-12 place-self-center"
//         mode="range"
//         selected={range}
//         onSelect={setRange}
//         numberOfMonths={2}
//         fromDate={new Date()}
//         toDate={addDays(new Date(), 365 * 5)} // 5 years from now
//         disabled={disabledDays}
//         styles={{
//           caption: { display: "flex", justifyContent: "space-between" },
//           caption_label: { fontSize: "1rem", fontWeight: 500 },
//           caption_dropdowns: { display: "flex", gap: "0.5rem" },
//         }}
//       />

//       <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
//         <div className="flex items-baseline gap-6">
//           <p className="flex gap-2 items-baseline">
//             {discount > 0 ? (
//               <>
//                 <span className="text-2xl">${regularPrice - discount}</span>
//                 <span className="line-through font-semibold text-primary-700">
//                   ${regularPrice}
//                 </span>
//               </>
//             ) : (
//               <span className="text-2xl">${regularPrice}</span>
//             )}
//             <span className="">/night</span>
//           </p>
//           {numNights ? (
//             <>
//               <p className="bg-accent-600 px-3 py-2 text-2xl">
//                 <span>&times;</span> <span>{numNights}</span>
//               </p>
//               <p>
//                 <span className="text-lg font-bold uppercase">Total</span>{" "}
//                 <span className="text-2xl font-semibold">${cabinPrice}</span>
//               </p>
//             </>
//           ) : null}
//         </div>

//         {(range?.from || range?.to) && (
//           <button
//             className="border border-primary-800 py-2 px-4 text-sm font-semibold"
//             onClick={resetRange}
//           >
//             Clear
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DateSelector;

import Spinner from "../_components/Spinner";

export default function loading() {
  return (
    <div className="grid justify-center align-middle">
      <Spinner />
      <p className="text-xl text-primary-200">loading cabins...</p>
    </div>
  );
}

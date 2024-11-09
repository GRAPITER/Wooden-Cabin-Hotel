"use client";

export default function FormContainer({ action, children, className }) {
  return (
    <form action={action} className={className}>
      {children}
    </form>
  );
}

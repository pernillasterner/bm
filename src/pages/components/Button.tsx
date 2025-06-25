// Skicka in aria-label och onClick för event - länka till välj tid
// Tillgänglighet

type ButtonProps = {
  children: React.ReactNode; // tar emot allt i react (strängar, andra komponenter)
  ariaLabel?: string
}

export default function Button({ children, ariaLabel } : ButtonProps) {
  return (
    <button
      type="button"
      role="button"
      aria-label={ariaLabel}
      className="w-full [background-color:var(--gray-800)] text-white py-4 rounded-2xl text-base font-medium mt-auto border-1 [border-color:var(--white-10)] hover:bg-neutral-800 transition-all duration-300 ease-in-out focus:outline focus:ring-2 focus:ring-black"
    >
      {children}
    </button>
  )
}

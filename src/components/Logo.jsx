export default function Logo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="#0b1f3a" />
      <path
        d="M8 22V11l5 6 3-4 3 4 5-6v11"
        stroke="#2dd4ff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

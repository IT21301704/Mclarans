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
      <rect width="32" height="32" rx="7" fill="#4a2c2a" />
      {/* candle */}
      <rect x="15" y="6" width="2" height="5" rx="1" fill="#f6c453" />
      <circle cx="16" cy="5" r="1.6" fill="#ff8a5c" />
      {/* cake body */}
      <path
        d="M7 16c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v9H7v-9Z"
        fill="#d64570"
      />
      {/* icing drips */}
      <path
        d="M7 16c1.5 0 1.5 2.4 3 2.4s1.5-2.4 3-2.4 1.5 2.4 3 2.4 1.5-2.4 3-2.4 1.5 2.4 3 2.4 1.5-2.4 3-2.4"
        stroke="#fff3e6"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* plate */}
      <rect x="5" y="25" width="22" height="2.4" rx="1.2" fill="#f6c453" />
    </svg>
  )
}

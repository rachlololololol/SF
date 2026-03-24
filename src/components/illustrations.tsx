export function WineGlass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25 10C25 10 22 45 22 55C22 65 30 72 40 72C50 72 58 65 58 55C58 45 55 10 55 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M40 72V100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 100H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M26 38C30 42 36 44 40 44C44 44 50 42 54 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function CoffeeCup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 35H65V75C65 82 59 88 52 88H33C26 88 20 82 20 75V35Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 42H72C76 42 80 46 80 50V55C80 59 76 63 72 63H65"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 35H70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M35 20C35 20 33 25 35 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M43 17C43 17 41 23 43 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M51 20C51 20 49 25 51 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function Plate({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="45" rx="50" ry="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="60" cy="45" rx="35" ry="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M60 10L60 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M50 12L48 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M70 12L72 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function Candle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="40" width="20" height="60" rx="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 40V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M30 30C30 30 24 22 30 12C36 22 30 30 30 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 100H45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function HandsToasting({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Left glass */}
      <path
        d="M20 20C20 20 18 50 18 58C18 66 24 72 32 72C40 72 46 66 46 58C46 50 44 20 44 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 72V95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 95H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right glass */}
      <path
        d="M96 20C96 20 94 50 94 58C94 66 100 72 108 72C116 72 122 66 122 58C122 50 120 20 120 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M108 72V95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M98 95H118" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Clink lines */}
      <path d="M55 30L62 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M65 20L70 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M75 25L82 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M68 28L70 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function BistroTable({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="45" rx="45" ry="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 45L20 110" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M90 45L100 110" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M60 53V110" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Wine glass on table */}
      <path
        d="M50 30C50 30 49 38 49 40C49 43 51 45 54 45C57 45 59 43 59 40C59 38 58 30 58 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Plate on table */}
      <ellipse cx="72" cy="40" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function Fork({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10V50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 10V50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 10V50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 50C8 50 8 55 15 55C22 55 22 50 22 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 55V110" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 30" fill="none" className={`w-full max-w-md mx-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 15H170M230 15H390"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle cx="190" cy="15" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="200" cy="15" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="210" cy="15" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function MapPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C8 2 5 5.1 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.1 16 2 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L15 8.5L22 9.5L17 14.5L18.5 22L12 18.5L5.5 22L7 14.5L2 9.5L9 8.5L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

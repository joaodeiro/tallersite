export const COLORS = {
  primary: '#DB2237',
  secondary: '#F47F44',
  background: '#121212',
  muted: '#1e1e1e',
  border: 'rgba(31, 31, 31, 0.5)',
} as const;

export const GRADIENTS = {
  primary: 'from-[#DB2237] to-[#F47F44]',
  hover: '0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)',
} as const;

export const TRANSITIONS = {
  default: 'transition-all duration-300',
  slow: 'transition-all duration-500',
  fast: 'transition-all duration-200',
} as const;

export const ANIMATIONS = {
  slideUp: 'animate-slideUp',
  fadeIn: 'animate-fadeIn',
  pulse: 'animate-pulse',
} as const; 
import React from 'react'

const Wifi: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 12.5498C6.97656 10.9035 9.46761 10.002 12.04 10.002C14.6124 10.002 17.1034 10.9035 19.08 12.5498"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.41992 8.99979C4.34234 6.42376 8.10422 5.00244 11.9999 5.00244C15.8956 5.00244 19.6575 6.42376 22.5799 8.99979"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.53003 16.1102C9.54523 15.389 10.7597 15.0015 12.005 15.0015C13.2504 15.0015 14.4648 15.389 15.48 16.1102"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20H12.01"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Wifi

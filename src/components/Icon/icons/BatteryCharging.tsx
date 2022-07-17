import React from 'react'

const BatteryCharging: React.FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
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
        d="M23 9V15"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M18 6H3C1.89543 6 1 6.89543 1 8V16C1 17.1046 1.89543 18 3 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6Z"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M14 13L10 10V14L6 11"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}

export default BatteryCharging

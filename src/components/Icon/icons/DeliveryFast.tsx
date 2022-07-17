import React from 'react'

const DeliveryFast: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M6 12H3"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6 17H5"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M17.829 18H23V12L19 10L18 6H10V18H12.171"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7H6"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M1 2H10V6"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 22C16.6569 22 18 20.6569 18 19C18 17.3431 16.6569 16 15 16C13.3431 16 12 17.3431 12 19C12 20.6569 13.3431 22 15 22Z"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}

export default DeliveryFast

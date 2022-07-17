import React from 'react'

const RChat: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
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
        d="M1 7V2H23V17H13L6 22V17H1V10H13"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M10 7L13 10L10 13"
        stroke="#00AD0C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}

export default RChat

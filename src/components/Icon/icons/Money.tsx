import React from 'react'

const Money: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6H24V24H0V6ZM2 8V22H22V8H2Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13ZM8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15Z"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 3H21V5H3V3Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 0H17V2H7V0Z" />
    </svg>
  )
}

export default Money

import React from 'react'

const CircleName: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10" cy="10" r="9" stroke="#20252A" strokeWidth="2" />
      <circle cx="10" cy="10" r="3" fill="#20252A" />
    </svg>
  )
}

export default CircleName

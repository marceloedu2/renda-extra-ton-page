import React from 'react'

const ChevronUp: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4001 8.2C11.7556 7.93333 12.2445 7.93333 12.6001 8.2L20.6001 14.2C21.0419 14.5314 21.1314 15.1582 20.8001 15.6C20.4687 16.0418 19.8419 16.1314 19.4001 15.8L12.0001 10.25L4.60006 15.8C4.15823 16.1314 3.53143 16.0418 3.20006 15.6C2.86869 15.1582 2.95823 14.5314 3.40006 14.2L11.4001 8.2Z"
      />
    </svg>
  )
}

export default ChevronUp

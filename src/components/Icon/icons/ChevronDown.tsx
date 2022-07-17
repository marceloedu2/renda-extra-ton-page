import React from 'react'

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
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
        d="M3.20006 8.4C3.53143 7.95817 4.15823 7.86863 4.60006 8.2L12.0001 13.75L19.4001 8.2C19.8419 7.86863 20.4687 7.95817 20.8001 8.4C21.1314 8.84183 21.0419 9.46863 20.6001 9.8L12.6001 15.8C12.2445 16.0667 11.7556 16.0667 11.4001 15.8L3.40006 9.8C2.95823 9.46863 2.86869 8.84183 3.20006 8.4Z"
      />
    </svg>
  )
}

export default ChevronDown

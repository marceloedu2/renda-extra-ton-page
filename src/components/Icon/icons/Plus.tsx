import React from 'react'

const Plus: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="27"
      height="48"
      viewBox="0 0 27 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.293 29.28C10.293 30.84 11.573 32.12 13.133 32.12C14.693 32.12 15.973 30.84 15.973 29.28V24.68H20.693C22.213 24.68 23.453 23.44 23.453 21.92C23.453 20.4 22.213 19.16 20.693 19.16H15.973V14.56C15.973 13 14.693 11.72 13.133 11.72C11.573 11.72 10.293 13 10.293 14.56V19.16H5.57301C4.05301 19.16 2.81301 20.4 2.81301 21.92C2.81301 23.44 4.05301 24.68 5.57301 24.68H10.293V29.28Z" />
    </svg>
  )
}

export default Plus

import React from 'react'

const Coupon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.773 21.8407L22.3407 15.273C22.5497 15.0641 22.7155 14.816 22.8286 14.543C22.9417 14.27 22.9999 13.9774 22.9999 13.6819C22.9999 13.3864 22.9417 13.0938 22.8286 12.8207C22.7155 12.5477 22.5497 12.2997 22.3407 12.0907L11.75 1.5H2V11.25L12.5907 21.8407C12.7997 22.0497 13.0477 22.2155 13.3207 22.3286C13.5938 22.4417 13.8864 22.4999 14.1819 22.4999C14.4774 22.4999 14.77 22.4417 15.043 22.3286C15.316 22.2155 15.5641 22.0497 15.773 21.8407V21.8407Z"
        stroke="#20252A"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.75C9.24264 9.75 10.25 8.74264 10.25 7.5C10.25 6.25736 9.24264 5.25 8 5.25C6.75736 5.25 5.75 6.25736 5.75 7.5C5.75 8.74264 6.75736 9.75 8 9.75Z"
        stroke="#20252A"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Coupon

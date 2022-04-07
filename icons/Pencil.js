const Pencil = (props) => (
  <svg
    width={'100%'}
    height={'100%'}
    strokeWidth={1.5}
    fill="none"
    viewBox="0 0 23 23"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.02 5.828 15.85 3l4.949 4.95-2.829 2.828m-4.95-4.95-9.606 9.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l9.606-9.607m-4.95-4.95 4.95 4.95"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Pencil

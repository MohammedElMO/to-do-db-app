
function Create() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      viewBox="0 0 24 24"
      id="create-note-alt"
      className="icon multi-color size-4"
    >
      <path
        id="secondary-fill"
        d="M17.44,8.22A5.49,5.49,0,0,1,14,9.91c0-.47-.26-4,1.5-6.1L16,4l.19-.72L18,4l.47-1.82.5-.09C19,2.57,19.23,6.18,17.44,8.22Z"
        fill="white"
        strokeWidth={2}
      />
      <path
        id="secondary-stroke"
        d="M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        id="primary-stroke"
        d="M19.44,8.22C17.53,10.41,14,10,14,10s-.39-4,1.53-6.18a3.49,3.49,0,0,1,.56-.53L18,4l.47-1.82A8.19,8.19,0,0,1,21,2S21.36,6,19.44,8.22ZM14,10l-2,2"
        stroke="rgb(0, 0, 0)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

export default Create;

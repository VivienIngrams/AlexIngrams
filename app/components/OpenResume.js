"use client"

const openResume = () => {
    window.open('cv_alex.pdf', '_blank')
  }

export default function OpenResume() {

  return (
    <button
      onClick={openResume}
      className="m-10 rounded border-2 border-yellow-600 bg-neutral-100 px-4 py-2 font-khand font-bold  text-black  "
    >
      Resume
    </button>
  )
}

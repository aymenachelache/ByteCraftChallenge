
import thankyou from "../assets/icon-thank-you.svg"
export default function ThankYou() {
  return (
    <div className="flex items-center justify-center h-full text-center">
      <div className="p-4">
        <div className="text-center">
          <img src={thankyou} alt="" className="mx-auto" />
          <h1 className="text-3xl font-bold mt-5 mb-2">Thank You!</h1>
          <p className="text-xs mb-4">Thanks for confirming your subscription! We hope you have Fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 text-white bg-Primary-PurplishBlue border border-Primary-PurplishBlue rounded-lg hover:bg-Primary-MarineBlue transition duration-150 ease-linear focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="text-sm font-medium">Home</span>
          </a>
        </div>
      </div>
    </div>
  )
}

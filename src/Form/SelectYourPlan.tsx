import FormWrapper from "../FormWrapper";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

export default function SelectYourPlan() {
  return (
    <FormWrapper title="Select Your Plan" paragraphe="You have the option of monthy or yearly billing.">
      {/* grid w-full gap-6 md:grid-cols-3 */}
    <div className="flex gap-3 mt-5">
        <div className="flex-1 max-w-sm px-4 pt-4 pb-2 bg-white border border-gray-200 rounded-lg shadow hover:border-black cursor-pointer transition duration-150 ease-linear">
            <img src={arcade} className="mb-8 w-auto" alt="" />
            <a href="#">
                <h5 className="text-md font-semibold tracking-tight text-gray-900">Arcade</h5>
            </a>
            <p className="mb-2 font-normal text-sm text-Neutral-CoolGray">9$/mo</p>
            <p className="text-xs mb-2 font-normal text-Primary-PurplishBlue">2 mounths free</p>
        </div>
        <div className="flex-1 max-w-sm px-4 pt-4 pb-2 bg-white border border-gray-200 rounded-lg shadow hover:border-black cursor-pointer transition duration-150 ease-linear">
            <img src={advanced} className="mb-8 w-auto" alt="" />
            <a href="#">
                <h5 className="text-md font-semibold tracking-tight text-gray-900">Advanced</h5>
            </a>
            <p className="mb-2 font-normal text-sm text-Neutral-CoolGray">12$/mo</p>
            <p className="text-xs mb-2 font-normal text-Primary-PurplishBlue">2 mounths free</p>
        </div>
        <div className="flex-1 max-w-sm px-4 pt-4 pb-2 bg-white border border-gray-200 rounded-lg shadow hover:border-black cursor-pointer transition duration-150 ease-linear">
            <img src={pro} className="mb-8 w-auto" alt="" />
            <a href="#">
                <h5 className="text-md font-semibold tracking-tight text-gray-900">Pro</h5>
            </a>
            <p className="mb-2 font-normal text-sm text-Neutral-CoolGray">15$/mo</p>
            <p className="text-xs mb-2 font-normal text-Primary-PurplishBlue">2 mounths free</p>
        </div>
    </div>
    <div className="text-center mt-5 bg-Neutral-Magnolia">
    <label className="inline-flex items-center my-3 cursor-pointer">
        <span className="me-3 text-sm font-medium text-gray-900 dark:text-black">Mounthly</span>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-Neutral-CoolGray"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-Neutral-CoolGray">Yearly</span>
      </label>
    </div>


    </FormWrapper>
  )
}

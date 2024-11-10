import FormWrapper from "../FormWrapper";

export default function AddOns() {
  return (
    <FormWrapper title="Pick add-ons" paragraphe="Add-ons help enhance your gaming experience.">
      
    <ul className="w-full">
    <li className="mb-2">
        <input type="checkbox" id="react-option" value="" className="hidden peer" />
        <label htmlFor="react-option" className="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-Primary-PurplishBlue hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
            <div className="grid grid-cols-12 gap-2 items-center w-full">
                <input type="checkbox" id="react-option" value="" className="peer col-span-1" />
                <div className="col-span-9">
                  <div className="w-full text-sm font-semibold">Online Service</div>
                  <div className="w-full text-xs">Access to multiplayer games.</div>
                </div>
                <p className="mb-2 font-normal text-sm text-Primary-PurplishBlue col-span-2">+1$/mo</p>
            </div>
        </label>
    </li>
    <li className="mb-2">
        <input type="checkbox" id="flowbite-option" value="" className="hidden peer" />
        <label htmlFor="flowbite-option" className="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-Primary-PurplishBlue hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
            <div className="grid grid-cols-12 gap-2 items-center w-full">
                <input type="checkbox" id="flowbite-option" value="" className="peer col-span-1" />
                <div className="col-span-9">
                  <div className="w-full text-sm font-semibold">Larger storage</div>
                  <div className="w-full text-xs">Extra 1TB of cloud save.</div>
                </div>
                <p className="mb-2 font-normal text-sm text-Primary-PurplishBlue col-span-2">+2$/mo</p>
            </div>
        </label>
    </li>
    <li>
        <input type="checkbox" id="angular-option" value="" className="hidden peer" />
        <label htmlFor="angular-option" className="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-Primary-PurplishBlue hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
            <div className="grid grid-cols-12 gap-2 items-center w-full">
                <input type="checkbox" id="angular-option" value="" className="peer col-span-1" />
                <div className="col-span-9">
                  <div className="w-full text-sm font-semibold">Customizable Profile</div>
                  <div className="w-full text-xs">Custom theme on your profile.</div>
                </div>
                <p className="mb-2 font-normal text-sm text-Primary-PurplishBlue col-span-2">+2$/mo</p>
            </div>
        </label>
    </li>
</ul>


    </FormWrapper>
  )
}

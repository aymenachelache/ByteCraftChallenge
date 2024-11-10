import FormWrapper from "../FormWrapper";

export default function FinishingUp() {
  return (
    <FormWrapper
      title="Finishing up"
      paragraphe="Double check everything looks OK before confitming."
    >
      <div className="mx-auto p-5 bg-Neutral-Alabaster rounded-md shadow-lg font-sans">
        <div className="flex justify-between mb-4">
          <span className="font-bold text-Primary-MarineBlue">
            Arcade (Monthly)
          </span>
          <span className="font-bold text-Primary-MarineBlue">$9/mo</span>
        </div>

        <div className="mb-4">
          <a
            href="#"
            className="text-Primary-PurplishBlue underline text-sm cursor-pointer"
          >
            Change
          </a>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-Neutral-CoolGray">Online service</span>
          <span className="text-Primary-MarineBlue text-sm">+$1/mo</span>
        </div>

        <div className="flex justify-between mb-4">
          <span className="text-Neutral-CoolGray">Larger storage</span>
          <span className="text-Primary-MarineBlue text-sm">+$2/mo</span>
        </div>
      </div>
      <div className="flex justify-between mt-4 px-2">
          <span className="text-Neutral-CoolGray">Total (per month)</span>
          <span className="text-Primary-MarineBlue text-sm">+$12/mo</span>
        </div>
    </FormWrapper>
  );
}

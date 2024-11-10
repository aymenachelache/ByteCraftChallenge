import FormWrapper from "../FormWrapper";
type userData = {
  name: string,
  email: string,
  phoneNumber: string,
}
type userFormProps = userData & {
  updateFields: (fields: Partial<userData>) => void,
  nameIsRequired: boolean,
  emailIsRequired: boolean,
  phoneIsRequired: boolean,
}
export default function PersonalInfo({name, email, phoneNumber, updateFields, nameIsRequired, emailIsRequired, phoneIsRequired}: userFormProps) {
  return (
    <FormWrapper title={"Personal info"} paragraphe="Please provide your name, email addres, and phone-number.">
      <div className="flex justify-between items-center w-full max-w-sm min-w-[200px]">
        <label htmlFor="name" className="block text-sm">
          Name
        </label>
        {nameIsRequired && <p className="text-xs text-Primary-StrawberryRed font-bold">This field is required</p>}
      </div>
      <div className="w-full max-w-sm min-w-[200px] mb-5">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Name..."
          id="name"
          name="name"   
          value={name}
          onChange={e => updateFields({name: e.target.value})}
        />
      </div>
      <div className="flex justify-between items-center w-full max-w-sm min-w-[200px]">
        <label htmlFor="email" className="block text-sm">
        Email Address
        </label>
        {emailIsRequired && <p className="text-xs text-Primary-StrawberryRed font-bold">This field is required</p>}
      </div>

      <div className="w-full max-w-sm min-w-[200px] mb-5">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="email"
          placeholder="Email Address..."
          value={email}
          onChange={e => updateFields({email: e.target.value})}
        />
      </div>
      <div className="flex justify-between items-center w-full max-w-sm min-w-[200px]">
        <label htmlFor="phone" className="block text-sm">
        Phone Number
        </label>
        {phoneIsRequired && <p className="text-xs text-Primary-StrawberryRed font-bold">This field is required</p>}
      </div>
      <div className="w-full max-w-sm min-w-[200px] mb-5">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Phone Number..."
          type="number"
          value={phoneNumber}
          onChange={e => updateFields({phoneNumber: e.target.value})}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault(); // Empêche la modification de la valeur avec les flèches
            }
          }}
        />
      </div>
    </FormWrapper>
  );
}

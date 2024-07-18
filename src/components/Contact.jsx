import { CONTACT } from "../constants"

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <div className="flex flex-col items-center ">
        <h2 className="my-5 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter ">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <p className="my-4">{CONTACT.email}</p>
        </div>
        <h6>© 2024 Mostafizur Rahman. All rights reserved.</h6>
      </div>
    </div>
  )
}

export default Contact
import React, { useEffect } from "react";
import sad from "../../../../../images/payment.jpg";

const Payment = () => {
  useEffect(() => {
    document.title = "Make Payment | Lightwars";
  }, []);

  return (
    <div className="w-2/3 flex flex-col items-center justify-center mx-auto  h-full py-10">
      <img className="h-96" src={sad} alt="" />
      <h3 className="text-2xl text-teal-500">
        To check your Order please click on My orders option and For the payment please contact to wellness center. Pay there and get you product. You can also contact to this Number +60196570474(whatsApp) with the screen shot of the product to know details. <br /> Thank you😊💐
      </h3>
    </div>
  );
};

export default Payment;

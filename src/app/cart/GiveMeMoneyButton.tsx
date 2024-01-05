import Script from "next/script";
import React from "react";

export interface ButtonProps {
    consumerMobileNo: string;
    consumerEmailId: string;
    items: {
        itemId: string;
        amount: string;
        comAmt: string;
    }[];
}

const features =
    {
        "enableAbortResponse": true,
        "enableExpressPay": true,
        "enableInstrumentDeRegistration": true,
        "enableMerTxnDetails": true,
        "enableNewWindowFlow": true    //for hybrid applications please disable this by passing false
    }

export default function GiveMeMoneyButton({consumerMobileNo, consumerEmailId, items}: ButtonProps) {
    function handleResponse(res: unknown) {
        console.log(res);
    }

    const reqJson = {
        features,
        "consumerData": {
            "deviceId": "WEBSH2",    //possible values "WEBSH1" or "WEBSH2"
            "token": "5f6a22f40a09a903f676214016574ae1453a37ce8675ae3958e3df133f1524df0ea2a28f80ef9d5ecf409c63d06cbbe5f80d1574d69d17c5c0ac9dca82928469",
            "returnUrl": "https://pgproxyuat.in.worldline-solutions.com/linuxsimulator/MerchantResponsePage.jsp",    //merchant response page URL
            "responseHandler": handleResponse,
            "paymentMode": "all",
            "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical.png",  //provided merchant logo will be displayed
            "merchantId": "L3348",
            "currency": "INR",
            "consumerId": "c964634",
            consumerMobileNo,
            consumerEmailId,
            "txnId": "1704448851263",   //Unique merchant transaction ID
            items,
        }
    };

    function takeMoney() {
        // @ts-ignore
        $.pnCheckout(reqJson);
        if (reqJson.features.enableNewWindowFlow) {
            // @ts-ignore
            pnCheckoutShared.openNewWindow();
        }
    }

    return (
        <>
            <Script src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js"
                    type="text/javascript"></Script>
            <Script type="text/javascript"
                    src="https://www.paynimo.com/paynimocheckout/server/lib/checkout.js"></Script>

            <button
                className="mt-4 w-full rounded-md bg-green-900 py-1.5 font-medium text-blue-50 hover:bg-black"
                onClick={takeMoney}
            >
                Check out
            </button>
        </>
    );
}

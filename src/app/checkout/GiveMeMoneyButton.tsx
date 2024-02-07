import Script from "next/script";
import {
    getCallBackUrl,
    getPaymentToken,
    verifyPaymentToken,
} from "../../../firebase";
import {ConsumerData} from "../utils/types";

export interface CartItem {
    id: string;
    code: string;
    image: { downloadURL: string }[];
    name: string;
    mrp: number;
    description: string;
    color: string;
    fabric: string;
    height: string;
    weight: string;
    categories: string;
}


export interface ButtonProps {
    consumerMobileNo: string;
    consumerEmailId: string;
    items: CartItem[];
}

const features =
    {
        showPGResponseMsg: false,
        "enableAbortResponse": true,
        "enableExpressPay": true,
        "enableInstrumentDeRegistration": true,
        "enableMerTxnDetails": true,
        "enableNewWindowFlow": true,
    };

function getConsumerData(consumerMobileNo: string, consumerEmailId: string, items: CartItem[]) : ConsumerData {
    return {
        accountNo: "",
        amountType: "",
        cardNumber: "",
        cvvCode: "",
        debitEndDate: "",
        debitStartDate: "",
        expMonth: "",
        expYear: "",
        frequency: "",
        maxAmount: "",
        totalamount: items.reduce((acc, item) => acc + item.mrp, 0),
        "deviceId": "WEBSH2",    //possible values "WEBSH1" or "WEBSH2"
        "returnUrl": getCallBackUrl(),
        "paymentMode": "all",
        "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical.png",  //provided merchant logo will be displayed
        "merchantId": "T998462",
        "currency": "INR",
        "consumerId": "c964634",
        consumerMobileNo,
        consumerEmailId,
        items: items.map((item) => ({
            itemId: item.id,
            amount: String(item.mrp),
            comAmt: "0",
        }))
    };
}

// TODO: Brain dead to think of a better name, if there is one
export default function GiveMeMoneyButton({
    consumerMobileNo,
    consumerEmailId,
    items,
}: ButtonProps) {

    async function takeMoney() {
        const csData = getConsumerData(consumerMobileNo, consumerEmailId, items);
        const {token, txnId} = (await getPaymentToken(csData)).data as { token: string, txnId: string };
        const consumerData = {...csData, token, txnId};

        console.log(consumerData);

        // @ts-ignore
        $.pnCheckout({
            features,
            consumerData: {
                ...consumerData,
                "responseHandler": () => null,
            },
        });
    }

    return (
        <>
            {/* TODO: Ideally there should be a node package. @Federal Bank 😤*/}
            <Script
                src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js"
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

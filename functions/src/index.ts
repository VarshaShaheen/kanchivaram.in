import {HttpsError, onCall, onRequest} from "firebase-functions/v2/https";
import * as Crypto from "crypto";

const keys = [
    "merchantId",
    "txnId",
    "totalamount",
    "accountNo",
    "consumerId",
    "consumerMobileNo",
    "consumerEmailId",
    "debitStartDate",
    "debitEndDate",
    "maxAmount",
    "amountType",
    "frequency",
    "cardNumber",
    "expMonth",
    "expYear",
    "cvvCode",
    "salt"
];

const salt = ""; // TODO: Everything tastes better with a little salt

export const getPaymentToken = onCall((request) => {
    request.data["salt"] = salt;
    request.data["txnId"] = Math.random().toString(36).substring(7); // TODO: Should probably ne a little more cryptic

    for(const key of keys)
        if (request.data[key] === undefined || request.data[key] === null)
            throw new HttpsError("invalid-argument", "Missing required parameter " + key);

    const dataString = keys.map(key => request.data[key]).join("|");
    const hash = Crypto.createHash("sha512").update(dataString).digest("hex");

    return {token: hash, txnId: request.data["txnId"]};
});

export const verifyPaymentToken = onRequest ((request, response) => {
    const msg = request.body["msg"];
    const parts = msg.split("|");
    const hash = parts.pop();

    const dataString = parts.join("|") + "|" + salt;
    const computedHash = Crypto.createHash("sha512").update(dataString).digest("hex");

    const status = parts[1];
    const mobile = parts[9];

    if (hash !== computedHash)
    {
        // TODO: Some one is trying to pattikal us 😡
    }
    else
    {
        // TODO: Transaction seems to be valid. hmm...
    }

    //  TODO: Should either buy example.com or change this
    response.redirect("https://www.example.com?status=" + status + "&mobile=" + mobile);
});

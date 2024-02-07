export interface PaymentItem {
    itemId: string,
    amount: string,
    comAmt: string,
}

export interface ConsumerData {
    token?: string,
    merchantId: string,
    txnId?: string,
    totalamount: number,
    accountNo: string,
    consumerId: string,
    consumerMobileNo: string,
    consumerEmailId: string,
    debitStartDate: string,
    debitEndDate: string,
    maxAmount: string,
    amountType: string,
    frequency: string,
    cardNumber: string,
    expMonth: string,
    expYear: string,
    cvvCode: string,

    deviceId: "WEBSH1" | "WEBSH2",
    returnUrl: string,
    paymentMode: "all" | "cards" | "netBanking" | "UPI" | "wallets", // cashCards, NEFTRTGS, emiBanks, BNPLBanks, cardlessEMIBanks and MVISA
    merchantLogoUrl: string,
    currency: "INR",
    items: Array<PaymentItem>
}

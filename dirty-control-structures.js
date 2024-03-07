// main();

// function main() {
//   const transactions = [
//     {
//       id: "t1",
//       type: "PAYMENT",
//       status: "OPEN",
//       method: "CREDIT_CARD",
//       amount: "23.99",
//     },
//     {
//       id: "t2",
//       type: "PAYMENT",
//       status: "OPEN",
//       method: "PAYPAL",
//       amount: "100.43",
//     },
//     {
//       id: "t3",
//       type: "REFUND",
//       status: "OPEN",
//       method: "CREDIT_CARD",
//       amount: "10.99",
//     },
//     {
//       id: "t4",
//       type: "PAYMENT",
//       status: "CLOSED",
//       method: "PLAN",
//       amount: "15.99",
//     },
//   ];

//   processTransactions(transactions);
// }

// function processTransactions(transactions) {
//   if (isEmptyTransaction) {
//     console.log("No transactions provided!");
//     return;
//   }
  
//   for (const transaction of transactions) {
//     if (transaction.status !== "OPEN") {
//       console.log("Invalid transaction status!", transaction);
//       continue;
//     }

//     switch (transaction.type) {
//       case "PAYMENT":
//         processPaymentTransaction(transaction);
//         break;
//       case "REFUND":
//         processRefundTransaction(transaction);
//         break;
//       default:
//         console.log("Invalid transaction type!", transaction);
//     }
//   }
// }

// function isEmptyTransaction(transactions) {
//   return !transactions || transactions.length === 0
// }

// function processPaymentTransaction(transaction) {
//   switch (transaction.method) {
//     case "CREDIT CARD":
//       processCreditCardPayment(transaction);
//       break;
//     case "PAYPAL":
//       processPayPalPayment(transaction);
//       break;
//     case "PLAN":
//       processPlanPayment(transaction);
//       break;
//     default:
//       console.log("Invalid payment method!");
//   }
// }

// function processRefundTransaction(transaction) {
//   switch (transaction.method) {
//     case "CREDIT CARD":
//       processCreditCardRefund(transaction);
//       break;
//     case "PAYPAL":
//       processPayPalRefund(transaction);
//       break;
//     case "PLAN":
//       processPlanRefund(transaction);
//       break;
//     default:
//       console.log("Invalid refund method!", transaction);
//   }
// }

// function processCreditCardPayment(transaction) {
//   console.log(
//     "Processing credit card payment for amount: " + transaction.amount
//   );
// }

// function processCreditCardRefund(transaction) {
//   console.log(
//     "Processing credit card refund for amount: " + transaction.amount
//   );
// }

// function processPayPalPayment(transaction) {
//   console.log("Processing PayPal payment for amount: " + transaction.amount);
// }

// function processPayPalRefund(transaction) {
//   console.log("Processing PayPal refund for amount: " + transaction.amount);
// }

// function processPlanPayment(transaction) {
//   console.log("Processing plan payment for amount: " + transaction.amount);
// }

// function processPlanRefund(transaction) {
//   console.log("Processing plan refund for amount: " + transaction.amount);
// }

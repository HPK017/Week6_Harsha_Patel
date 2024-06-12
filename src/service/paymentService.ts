import { Payment } from "../model/paymentModel";

const createPayment = async (paymentDetails: Payment) => {
    try {
        const payment = await Payment.create(paymentDetails);
        return payment;
    } catch (error) {
        console.error("Error creating payment:", error);
        throw error;
    }
};

const getAllPayments = async () => {
    try {
        const payments = await Payment.findAll();
        return payments;
    } catch (error) {
        console.error("Error fetching payments:", error);
        throw error;
    }
};

export {createPayment, getAllPayments}
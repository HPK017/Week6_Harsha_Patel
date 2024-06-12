import { Request, Response } from "express";
import { createPayment, getAllPayments} from "../service/paymentService";

const createNewPayment = async (req: Request, res: Response) => {
    try {
        const payment = await createPayment(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ error});
    }
};

const getPayments = async (req: Request, res: Response) => {
    try {
        const payments = await getAllPayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export {createNewPayment, getPayments}
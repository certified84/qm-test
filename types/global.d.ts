import { StackNavigationProp } from "@react-navigation/stack";

export {};

declare global {
  interface IResponse<T> {
    status: "success" | "error";
    message: string;
    response_code: number;
    results: T[] | undefined;
    data: T | undefined;
  }

  interface IQuestion {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: stirng;
  }
}

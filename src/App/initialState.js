import Instructions from "../Instructions"
import MultipleChoice from "../MultipleChoice"
import FillBlank from "../FillBlank"
import TrueFalse from "../TrueFalse"
import Score from "../Score"

export default {
  didSubmit: false,
  page: 0,
  workflow: [
    { type: Instructions, headerMessage: "Instructions" },
    {
      type: MultipleChoice,
      headerMessage: "Question 1/3",
      prompt:
        "Which of the following programming languages were developed prior to 1960?",
      choices: ["Fortran", "Cobol", "Lisp", "Perl"],
      answer: new Set("Fortran Cobol Lisp".split(" ")),
      response: undefined
    },
    {
      type: FillBlank,
      headerMessage: "Question 2/3",
      prompt: "In Javascript, 0 + {} would obviously result in what?",
      answer: "0[object Object]",
      response: undefined
    },
    {
      type: TrueFalse,
      headerMessage: "Question 3/3",
      prompt: "Software development is a team sport?",
      answer: "true",
      response: undefined
    },
    { type: Score, headerMessage: "Score" }
  ]
}

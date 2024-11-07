import "./App.css";
import HeadSideContentLayout from "./Pages/Layouts/HeadSideContentLayout/HeadSideContentLayout";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import InputGuide from "./Pages/InputGuide/Input.guide";
import ButtonGuide from "./Pages/ButtonGuide/Button.guide";
import CheckBoxGuide from "./Pages/CheckBoxGuide/Checkbox.guide";
import RadioButtonGuide from "./Pages/RadioButtonGuide/radio.guide";
import CardGuide from "./Pages/CardGuide/card.guide";
import TabGuide from "./Pages/TabGuide/Tab.guide";
import StepperGuide from "./Pages/StepperGuide/Stepper.guide";
import TableGuide from "./Pages/TableGuide/Table.guide";
import FormsGuide from "./Pages/FormsGuide/Forms.guide";
import CaraouselGuide from "./Pages/CaraouselGuide/Caraousel.guide";
import CalenderGuide from "./Pages/CalenderGuide/CalenderGuide";
import LoginFormGuide from "./Pages/LoginFormGuide/LoginForm.guide";
import RegisterFormGuide from "./Pages/RegisterFormGuide/RegisterForm.guide";
import CounterGuide from "./Pages/CounterGuide/CounterGuide";
import StarRatingGuide from "./Pages/StarRatingGuide/StarRatingGuide";
import ExpansionPanelGuide from "./Pages/ExpansionPanelGuide/ExpansionPanelGuide";
import { ErrorBoundryPage } from "./Pages/ErrorBoundry";
import LoadingSpinnerGuide from "./Pages/LoadingSpinnerGuide/LoadingSpinnerGuide";
const router = createHashRouter([
  {
    path: "/",
    element: <HeadSideContentLayout />,
    children: [
      {
        path: "Input",
        element: <InputGuide />,
      },
      {
        path: "Button",
        element: <ButtonGuide />,
      },
      {
        path: "CheckBox",
        element: <CheckBoxGuide />,
      },
      {
        path: "RadioButton",
        element: <RadioButtonGuide />,
      },
      {
        path: "Card",
        element: <CardGuide />,
      },
      {
        path: "Tabs",
        element: <TabGuide />,
      },
      {
        path: "Table",
        element: <TableGuide />,
      },
      {
        path: "Stepper",
        element: <StepperGuide />,
      },
      {
        path: "Forms",
        element: <FormsGuide />,
      },
      {
        path: "Caraousel",
        element: <CaraouselGuide />,
      },
      {
        path: "Calender",
        element: <CalenderGuide />,
      },
      {
        path: "LoginForm",
        element: <LoginFormGuide />,
      },
      {
        path: "RegistraionForm",
        element: <RegisterFormGuide />,
      },
      {
        path: "Counter",
        element: <CounterGuide />,
      },
      {
        path: "StarRating",
        element: <StarRatingGuide />,
      },
      {
        path: "ExpansionPanel",
        element: <ExpansionPanelGuide />,
      },
      {
        path: "LoadingSpinner",
        element: <LoadingSpinnerGuide />,
      },
      {
        path: "*",
        element: <h1>Work under progress</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

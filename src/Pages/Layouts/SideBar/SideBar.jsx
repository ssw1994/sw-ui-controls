import { useNavigate } from "react-router";

const CONTROLS = [
  {
    id: "sw_input",
    url: "Input",
  },
  {
    id: "sw_button",
    url: "Button",
  },
  {
    id: "sw_checkbox",
    url: "CheckBox",
  },
  {
    id: "sw_card",
    url: "Card",
  },
  {
    id: "sw_radio_button",
    url: "RadioButton",
  },
  {
    id: "sw_select",
    url: "Select",
  },
  {
    id: "sw_stepper",
    url: "Stepper",
  },
  {
    id: "sw_tabs",
    url: "Tabs",
  },
  {
    id: "sw_form",
    url: "Forms",
  },
  {
    id: "sw_clock",
    url: "Clock",
  },
  // {
  //   id: "sw_datepicker",
  //   url: "DatePicker",
  // },
  {
    id: "sw_login_form",
    url: "LoginForm",
  },
  // {
  //   id: "sw_password_input",
  //   url: "PasswordInput",
  // },
  {
    id: "sw_registraion_form",
    url: "RegistraionForm",
  },
  {
    id: "sw_table",
    url: "Table",
  },
  {
    id: "sw_timer",
    url: "Timer",
  },
  {
    id: "sw_carausel",
    url: "Caraousel",
  },
  {
    id: "sw_calender",
    url: "Calender",
  },
  {
    id: "sw_expansion_panel",
    url: "ExpansionPanel",
  },
  {
    id: "sw_counter",
    url: "Counter",
  },
];

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="sw-side-bar">
      <ul style={{ position: "absolute", top: "100px" }}>
        {CONTROLS.map((control) => {
          return (
            <li key={control?.id} onClick={() => navigate(control.url)}>
              {control.url}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { useState } from "react";
import { FormControl } from "../../components/Forms/FormControl";
import FormGroup, { FormButton } from "../../components/Forms/FormGroup";
import { Tabs, Tab } from "../../components/Tabs";
import moment from "moment";

export default function FormsGuide(props) {
  let { skill } = props;
  if (!skill) {
    skill = { name: "", category: "", rating: 1 };
  }
  const addSkill = (payload) => {
    console.log(payload);
  };
  const formSubmit = (e) => {
    console.log(e);
  };

  const [userForm, updateForm] = useState({
    username: "sachin",
    password: "password@1994",
    responsibilities: "<h1>Response</h1>",
    fromDate: moment(new Date()).format("YYYY-MM-DD"),
    toDate: moment(new Date()).format("YYYY-MM-DD"),
    rePassword: "password@1994",
    rating: 3,
  });

  const matchPassword = (values) => {
    const { password, rePassword } = values;
    console.log(password, rePassword);
    return password === rePassword ? null : [true, "Password mismatch"];
  };

  return (
    <div>
      <h1>Form Guide</h1>

      <Tabs>
        <Tab header="Result">
          <FormGroup onSubmit={addSkill}>
            <FormControl
              type="text"
              name="category"
              placeholder="e.g Backend"
              label="Category"
              value={skill.category}
              required
            />
            <FormControl
              type="text"
              name="skill"
              placeholder="e.g Java"
              label="Skill Name"
              value={skill.name}
              required
            />

            <FormControl
              type="rating"
              name="rating"
              value={skill.rating}
              label="Rate yourself for this skill"
              min={1}
              max={5}
              required
            />

            <FormControl
              name="profile_image"
              required
              label="Profile Image"
              type="file"
            />
            <FormButton style={{ marginTop: "10px", padding: "15px 25px" }}>
              Save
            </FormButton>
          </FormGroup>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {` 
                const formSubmit = (e) => {
                  console.log(e);
                };

                const matchPassword = (values) => {
                  const { password, rePassword } = values;
                  console.log(password, rePassword);
                  return password === rePassword ? null : [true, "Password mismatch"];
                };

                <FormGroup onSubmit={formSubmit} formValidator={[matchPassword]}>
                <FormControl
                  type="text"
                  label="Username"
                  minLength={4}
                  required={true}
                  name="username"
                ></FormControl>
                <FormControl
                  type="password"
                  label="Passowrd"
                  minLength={8}
                  required={true}
                  name="password"
                ></FormControl>
                <FormControl
                  type="password"
                  label="Re Enter Password"
                  minLength={8}
                  required={true}
                  name="rePassword"
                ></FormControl>
                <FormControl
                  type="select"
                  label="User type"
                  items={[
                    { type: "admin", id: 1 },
                    { type: "guest", id: 2 },
                    { type: "retail", id: 3 },
                  ]}
                  required={true}
                  config={{ displayName: "type", value: "id" }}
                  name="userType"
                ></FormControl>
                <FormControl
              type="editor"
              label="Responsibilities"
              name="responsibilites"
              value={userForm.responsibilities}
              required
            />
            <FormControl
              type="rating"
              min={1}
              max={5}
              name="rating"
              value={userForm.rating}
              required
            />
                <FormButton>Submit</FormButton>
              </FormGroup>`}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}

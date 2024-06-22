import { useState } from "react";
import {
  TextArea,
  BasicTextInput,
  PasswordInput,
  EmailInput,
  AutoCompleteTextInput,
  InputTextList,
} from "./index";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "components/Inputs",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div
        style={{
          alignContent: "space-around",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          margin: 12,
          minHeight: 200,
          padding: 8,
          width: "370px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo = () => {
  const INITIAL_STATE = {
    textArea: "",
    basicTextInput: "",
    passwordInput: "",
    emailInput: "",
    autoComplete: "",
    inputTextList: ["blah", "sandwich", "burrito"],
  };
  const [form, setForm] = useState(INITIAL_STATE);

  return (
    <>
      <TextArea
        placeholder={"textArea"}
        label={"Text Area"}
        rows={10}
        value={form.textArea}
        resize={true}
        onChange={(e) => {
          setForm({ ...form, textArea: e.target.value });
        }}
      />
      <InputTextList
        placeholder={"InputTextList"}
        label={"InputTextList"}
        value={form.inputTextList}
        setValue={(val) => setForm({ ...form, inputTextList: val })}
      />
      <BasicTextInput
        placeholder={"basicTextInput"}
        label={"Basic Text Input"}
        value={form.basicTextInput}
        onChange={(e) => {
          setForm({ ...form, basicTextInput: e.target.value });
        }}
      />
      <PasswordInput
        placeholder={"passwordInput"}
        label={"Password Input"}
        value={form.passwordInput}
        onChange={(e) => {
          setForm({ ...form, passwordInput: e.target.value });
        }}
        showToggle={true}
      />
      <EmailInput
        placeholder={"emailInput"}
        label={"Email Input"}
        value={form.emailInput}
        onChange={(e) => {
          setForm({ ...form, emailInput: e.target.value });
        }}
      />
      <AutoCompleteTextInput
        placeholder={"AutoCompleteInput"}
        label={"AutoCompleteInput"}
        value={form.autoComplete}
        options={["one", "two", "three", "burrito"]}
        onChange={(e) => {
          setForm({ ...form, autoComplete: e.target.value });
        }}
      />
    </>
  );
};

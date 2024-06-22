import { useState } from "react";
import { Modal } from "./Modal";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "components/Modal",
  component: Modal,
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
  // decorators: [
  //   () => (
  //     <div
  //       style={{
  //         alignContent: "space-around",
  //         display: "flex",
  //         flexDirection: "column",
  //         flexWrap: "wrap",
  //         justifyContent: "space-evenly",
  //         margin: 12,
  //         minHeight: 200,
  //         padding: 8,
  //         width: "100%",
  //       }}
  //     >
  //       <Modal />
  //     </div>
  //   ),
  // ],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        width: "75vw",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Click to open Modal
      </button>

      <Modal isOpen={isOpen}>
        Text to observe functionality
      </Modal>
    </div>
  );
};

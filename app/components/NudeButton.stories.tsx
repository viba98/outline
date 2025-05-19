import type { Meta, StoryObj } from "@storybook/react";
import NudeButton from "./NudeButton";

const meta: Meta<typeof NudeButton> = {
  title: "Components/NudeButton",
  component: NudeButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NudeButton>;

export const Default: Story = {
  args: {
    children: "★",
  },
};

export const CustomSize: Story = {
  args: {
    children: "★",
    size: 32,
  },
};

export const CustomDimensions: Story = {
  args: {
    children: "★",
    width: 48,
    height: 32,
  },
};

export const WithAction: Story = {
  args: {
    children: "★",
    action: {
      name: "Star Item",
      perform: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Starred!");
      },
    },
  },
};

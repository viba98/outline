import type { Meta, StoryObj } from "@storybook/react";
import { Action, ActionContext } from "~/types";
import ActionButton from "./ActionButton";

const meta: Meta<typeof ActionButton> = {
  title: "Components/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

// Mock action and context
const mockAction: Action = {
  name: "Delete Item",
  perform: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
  visible: () => true,
};

const mockContext: ActionContext = {
  isButton: true,
  // Add other required context properties here
};

export const Basic: Story = {
  args: {
    children: "Click Me",
  },
};

export const WithTooltip: Story = {
  args: {
    children: "Hover Me",
    tooltip: {
      content: "This is a tooltip",
      placement: "top",
    },
  },
};

export const WithAction: Story = {
  args: {
    action: mockAction,
    context: mockContext,
  },
};

export const Disabled: Story = {
  args: {
    action: mockAction,
    context: mockContext,
    disabled: true,
  },
};

export const Hidden: Story = {
  args: {
    action: {
      ...mockAction,
      visible: () => false,
    },
    context: mockContext,
    hideOnActionDisabled: true,
  },
};

export const CustomLabel: Story = {
  args: {
    action: {
      ...mockAction,
      name: (_context: ActionContext) => "Custom Dynamic Label",
    },
    context: mockContext,
  },
};

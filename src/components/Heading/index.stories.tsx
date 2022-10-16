import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from ".";

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: "Meu título",
        size: "md",
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio",
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: "sm",
        children: <h2>Heading with h2</h2>,
    },
};

export const Medium: StoryObj<HeadingProps> = {
    args: {
        size: "md",
        children: <h2>Heading with h2</h2>,
    },
};

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: "lg",
        children: <h2>Heading with h2</h2>,
    },
};

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        size: "lg",
        children: <h1>Heading with h1</h1>,
    },
};

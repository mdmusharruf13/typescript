import { FC } from "react";

interface PrimaryButtonProps {
  type: "primary";
  label: string;
}
interface SecondaryButtonProps {
  type: "secondary";
  label: string;
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

// type predicate function
function isPrimaryButtonProps(props: ButtonProps): props is PrimaryButtonProps {
  return props.type === "primary";
}

export const primaryButtonProps: PrimaryButtonProps = {
  type: "primary",
  label: "Primary Button",
};

export const secondaryButtonProps: SecondaryButtonProps = {
  type: "secondary",
  label: "Primary Button",
};

const Button: FC<ButtonProps> = (props) => {
  if (isPrimaryButtonProps(props)) {
    return (
      <button style={{ backgroundColor: "red", color: "white" }}>
        {props.label}
      </button>
    );
  } else {
    return (
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid grey",
        }}
      >
        {props.label}
      </button>
    );
  }
};

export default Button;

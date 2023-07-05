import styles from "./Button.module.css"

interface IButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Button(props: IButtonProps) {
  return (
    <button className={styles.button}type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

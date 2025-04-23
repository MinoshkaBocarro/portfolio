import styles from "./MbButton.module.scss";

function MbButton({ children, onClick }) {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
}

export default MbButton;

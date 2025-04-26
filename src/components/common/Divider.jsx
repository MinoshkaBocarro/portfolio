import divider from "../../assets/divider.svg";

import styles from "./Divider.module.scss";

function Divider() {
	return (
		<img
			className={styles.divider}
			src={divider}
			alt="an intricate page divider"
		/>
	);
}

export default Divider;

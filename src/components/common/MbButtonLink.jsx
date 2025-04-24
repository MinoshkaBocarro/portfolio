import { Link } from "react-router-dom";

import styles from "./MbButtonLink.module.scss";

function MbButtonLink({ children, to, onMouseEnter, onMouseLeave }) {
	return (
		<Link
			to={to}
			className={styles.button}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</Link>
	);
}

export default MbButtonLink;

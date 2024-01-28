import React, { useState } from "react";

import Button from "./ui/StyledButton";

const Counter: React.FC = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div style={{ backgroundColor: "lightblue", padding: "10px" }}>
			<p>
				Count: {count}
				<Button name="Increment" onClick={increment} />
			</p>
		</div>
	);
};

export default Counter;

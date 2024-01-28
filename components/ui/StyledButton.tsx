import React from "react";

type ButtonProps = {
	name: string;
	onClick: () => void;
};

const StyledButton: React.FC<ButtonProps> = ({ name, onClick }) => {
	return (
		<button
			type="button"
			style={{
				backgroundColor: "blue",
				color: "white",
				fontWeight: "bold",
				padding: "0.5rem 1rem",
				borderRadius: "0.25rem",
				border: "none",
				cursor: "pointer",
				marginLeft: "1rem",
			}}
			onClick={onClick}
		>
			{name}
		</button>
	);
};

export default StyledButton;

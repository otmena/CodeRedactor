import React from "react";

type Props = {
	onRun: () => void;
};

export default function RunButton({ onRun }: Props) {
	return (
		<button
			onClick={onRun}
			className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
			Run
		</button>
	);
}

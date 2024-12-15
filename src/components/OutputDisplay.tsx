import React from "react";

type Props = {
	output: string;
};

export default function OutputDisplay({ output }: Props) {
	return (
		<div className='mt-4 p-4 bg-gray-800 text-white rounded shadow'>
			<h3 className='text-lg font-bold mb-2'>Результат выполнения</h3>
			<pre className='whitespace-pre-wrap'>{output}</pre>
		</div>
	);
}

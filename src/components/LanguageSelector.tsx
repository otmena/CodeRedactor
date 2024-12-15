import React from "react";

type Props = {
	language: string;
	setLanguage: (value: string) => void;
};

export default function LanguageSelector({ language, setLanguage }: Props) {
	return (
		<select
			value={language}
			onChange={(e) => setLanguage(e.target.value)}
			className='block w-full p-2 border border-gray-300 rounded'>
			<option value='javascript'>JavaScript</option>
			<option value='python'>Python</option>
		</select>
	);
}

import { Editor } from "@monaco-editor/react";
import React from "react";

type Props = {
	language: string;
	code: string;
	setCode: (value: string) => void;
};

export default function CodeEditor({ language, code, setCode }: Props) {
	return (
		<Editor
			height='600px'
			width='1000px'
			language={language}
			value={code}
			onChange={(value) => setCode(value || "")}
			options={{
				fontSize: 14,
				minimap: { enabled: false },
				scrollBeyondLastLine: false,
			}}
		/>
	);
}

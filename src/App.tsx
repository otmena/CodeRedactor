/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
import CodeEditor from "./components/CodeEditor";
import RunButton from "./components/RunButton";
import OutputDisplay from "./components/OutputDisplay";
import { mockServer } from "./utils/mockServer";

function App() {
	const [language, setLanguage] = useState<string>("javascript");
	const [code, setCode] = useState<string>("");
	const [output, setOutput] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const handleRun = async () => {
		setLoading(true);
		setOutput("");
		try {
			const response = await mockServer({ language, code });
			if (response.status === "success") {
				setOutput(response.output || "");
			} else {
				setOutput(response.error || "");
			}
		} catch (error) {
			setOutput("Unexpected error occurred.");
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className='p-6 w-100px mx-auto'>
			<LanguageSelector language={language} setLanguage={setLanguage} />
			<CodeEditor language={language} code={code} setCode={setCode} />
			<RunButton onRun={handleRun} />
			{loading ? <p className='text-blue-500'>Executing...</p> : <OutputDisplay output={output} />}
		</div>
	);
}

export default App;

interface ExecuteCodeRequest {
	language: string;
	code: string;
}

interface ExecuteCodeResponse {
	status: "success" | "error";
	output?: string;
	error?: string;
}

export const mockServer = (request: ExecuteCodeRequest): Promise<ExecuteCodeResponse> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const { language, code } = request;

			if (code.toLowerCase().includes("error")) {
				resolve({
					status: "error",
					error: `SyntaxError: Unexpected token in ${language}`,
				});
			} else {
				resolve({
					status: "success",
					output: `Code executed successfully in ${language}:\n${code}`,
				});
			}
		}, 1000);
	});
};

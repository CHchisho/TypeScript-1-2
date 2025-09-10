interface ExamResult {
	name: string;
	scores: [string, number][];
	totalScore: number;
}

const examResult: ExamResult = {
	name: "Alice",
	scores: [["Math", 85], ["Science", 92], ["History", 78]],
	totalScore: 255
};

function displayAverageScore(result: ExamResult): void {
	const totalSubjects = result.scores.length;
	const totalScore = result.totalScore;
	const averageScore = totalScore / totalSubjects;
	console.log(`Average Score for ${result.name}: ${averageScore.toFixed(2)}`);
}

displayAverageScore(examResult);

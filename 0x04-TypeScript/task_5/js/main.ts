interface MajorCredits {
	credits: number
	brand: "MajorCredits"
}
interface MinorCredits {
	credits: number
	brand: "MinorCredits"
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits) => subject1.credits + subject2.credits

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits) => subject1.credits + subject2.credits

interface DirectorInterface {
	workFromHome(): string
	getCoffeeBreak(): string
	workDirectorTasks(): string
}

interface TeacherInterface {
	workFromHome(): string
	getCoffeeBreak(): string
	workTeacherTasks(): string
}

class Director implements DirectorInterface {
	workFromHome() {
		return "Working from home"
	}

	getCoffeeBreak() {
		return "Getting a coffee break"
	}

	getToWork() {
		return "Getting a coffee break"
	}

	workDirectorTasks() {
		return "Getting to director tasks"
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return "Cannot work from home"
	}

	getCoffeeBreak() {
		return "Cannot have a break"
	}

	getToWork() {
		return "Cannot have a break"
	}

	workTeacherTasks() {
		return "Getting to work"
	}
}

interface forFunction {
	(salary: number| string): Director | Teacher
}
const createEmployee: forFunction = (salary) => {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

const isDirector = (employee: Director | Teacher) => {
	if (employee instanceof Director) {
		return employee.workDirectorTasks();;
	} else if (employee instanceof Teacher) {
		return employee.workTeacherTasks();;
	}
}

const executeWork = (employee: Director | Teacher) => {
	return isDirector(employee);
}

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => {
	if (todayClass === "Math") {
		return "Teaching Math"
	} else if (todayClass === "History") {
		return "Teaching History"
	}
}


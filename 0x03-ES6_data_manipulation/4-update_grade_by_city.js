export default function updateStudentGradeByCity(arr, city, newGrades) {
  const array = arr.filter((ele) => ele.location === city);
  const grade = array.map((ele) => {
    newGrades.filter((g) => {
      /* eslint-disable no-param-reassign */
      if (g.studentId === ele.id) ele.grade = g.grade;
      return true;
    });
    if (!ele.grade) ele.grade = 'N/A';
    return ele;
  });
  return grade;
}

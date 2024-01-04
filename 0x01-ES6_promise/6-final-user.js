import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  return (Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          arr.push({
            status: result.status,
            value: result.value,
          });
        } else {
          arr.push({
            status: result.status,
            value: result.reason,
          });
        }
      });
      return arr;
    }));
}

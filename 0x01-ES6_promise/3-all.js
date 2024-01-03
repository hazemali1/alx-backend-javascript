import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const photoResponse = responses[0];
      const userResponse = responses[1];

      console.log(
        photoResponse.body,
        userResponse.firstName,
        userResponse.lastName
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define and export the handleProfileSignup function
export async function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions and store their promises
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  
  // Wait for all promises to settle
  const results = await Promise.allSettled([signUpPromise, uploadPromise]);

  // Return an array with the status and value/error of each promise
  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason
  }));
}

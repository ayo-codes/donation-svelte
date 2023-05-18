import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
});
export const latestDonation = writable(null);

// This is creating a new Store - a svelte concept to represent a value that can be accessed by any component in the application. This will be a simple way for any component to access information on the currently logged in user.
// One solution to this is to create a Svelte store that contains the latest donation made
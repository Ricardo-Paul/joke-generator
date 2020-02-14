import store from "./store";
import { setError, setAuthenticated, setUnAuthenticated } from "./actions/actions";

window.store = store;
window.setError = setError;
window.setAuthenticated = setAuthenticated;
window.setUnAuthenticated = setUnAuthenticated;
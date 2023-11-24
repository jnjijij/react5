// moviesActions.js

// ... (other imports)

const YOUR_MOVIES_API_KEY = 'YOUR_ACTUAL_API_KEY';
const YOUR_MOVIES_API_ENDPOINT = 'https://api.themoviedb.org/3/discover/movie'; // Replace with your actual movies API endpoint

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get(`${YOUR_MOVIES_API_ENDPOINT}`, {
      params: {
        api_key: YOUR_MOVIES_API_KEY,
        // Add any additional parameters your API requires
      },
    });
    dispatch(setMovies(response.data.results));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

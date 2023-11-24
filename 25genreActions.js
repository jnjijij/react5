// genreActions.js

// ... (other imports)

const YOUR_GENRES_API_KEY = 'YOUR_ACTUAL_API_KEY';
const YOUR_GENRES_API_ENDPOINT = 'https://api.themoviedb.org/3/genre/movie/list'; // Replace with your actual genres API endpoint

export const fetchGenres = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get(`${YOUR_GENRES_API_ENDPOINT}`, {
      params: {
        api_key: YOUR_GENRES_API_KEY,
        // Add any additional parameters your API requires
      },
    });
    dispatch(setGenres(response.data.genres));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// genreActions.js

// ... (other imports)

const YOUR_GENRES_API_KEY = 'YOUR_ACTUAL_API_KEY';
const YOUR_GENRES_API_ENDPOINT = 'https://api.example.com/genres'; // Replace with your actual genres API endpoint

export const fetchGenres = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get(`${YOUR_GENRES_API_ENDPOINT}/genre/movie/list?api_key=${YOUR_GENRES_API_KEY}`);
    dispatch(setGenres(response.data.genres));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

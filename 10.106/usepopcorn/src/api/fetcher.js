const KEY = "5ed6b1e6";
async function fetchFromAPI(
  url,
  setIsLoading,
  setError,
  onSuccess,
  controller
) {
  try {
    setIsLoading(true);
    setError("");
    const options = controller ? { signal: controller.signal } : {};
    const res = await fetch(url, options);

    if (!res.ok)
      throw new Error("Something went wrong with internet connection");

    const data = await res.json();

    if (data.Response === "False") throw new Error("Movie not found");

    onSuccess(data);
    setError("");
  } catch (err) {
    if (err.name !== "AbortedError") {
      setError(err.message);
    }
  } finally {
    setIsLoading(false);
  }
}

export async function fetchMovie(
  setIsLoading,
  setError,
  setMovieData,
  selectedId
) {
  const url = `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`;
  await fetchFromAPI(url, setIsLoading, setError, setMovieData);
}
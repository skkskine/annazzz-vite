const apiUrl = `${import.meta.env.VITE_PAYLOAD_API_URL}`;

export async function getApi(endpoint: string, query?: string) {
  try {
    let url = `${apiUrl}/${endpoint}`;
    if (query) {
      url += query;
    }
    const res = await fetch(url);

    if (!res.ok) {
      const err = await res.json();
      return {
        message: err.message || "An error occured",
        status: res.status,
      };
    }
    const formattedResponse = await res.json();
    return Promise.resolve(
      formattedResponse.docs ? formattedResponse.docs : formattedResponse
    );
  } catch (err) {
    console.error("Error:", err);
    return {
      message: "An error occured",
    };
  }
}

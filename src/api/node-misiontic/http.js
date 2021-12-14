const apiUrl = process.env.REACT_APP_URL_API;

export const get = async (endpoint) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json()
  } catch (error) {
    return console.log(error);
  }
}

export const post = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data)
    });
    return response.json()
  } catch (error) {
    return console.log(error);
  }
}

export const httpDelete = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(data)
    });
    return response.json()
  } catch (error) {
    return console.log(error);
  }
}
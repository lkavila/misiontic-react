const urlApi = process.env.REACT_APP_URL_API

export const get = async (endpoint) => {
  try {
    const response = await fetch(`${urlApi}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
}

export const post = async (endpoint, data) => {
  try {
    const response = await fetch(`${urlApi}/${endpoint}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
}

export const httpDelete = async (endpoint, data) => {
  try {
    const response = await fetch(`${urlApi}/${endpoint}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
}


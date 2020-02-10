import request from "superagent";
export const ALL_IMAGES = "ALL_IMAGES";
const baseUrl = "https://neelagiri-image-board.herokuapp.com";
function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}
export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;
  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body);
        // console.log(action);
        dispatch(action);
      })
      .catch(console.error);
  }
};

export const NEW_IMAGE = "NEW_IMAGE";
function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}
export const createImage = (body, jwt) => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .set(`Authorization`, `Bearer ${jwt}`)
    .send(body)
    .then(response => {
      const action = newImage(response.body);
      // console.log(response.status);
      dispatch(action);
    })
    .catch(console.error);
};

export const LOGIN = "LOGIN";
function auth(payload) {
  return { type: "LOGIN", payload };
}

export const login = (email, password) => dispatch => {
  // console.log(email, password);
  const credentialsObj = {
    email: email,
    password: password
  };

  request
    .post(`${baseUrl}/login`)
    .send(credentialsObj)
    .then(response => {
      console.log(response);
      const action = auth(response.body.jwt);
      dispatch(action);
    })
    .catch(error => {
      console.log(error.response.body.message);
      return console.error;
    });
};

const newUser = "NEW_USER";
function userSignup(payload) {
  return { type: newUser, payload };
}

export const signup = (email, password) => dispatch => {
  console.log(email, password);
  const credentialsObj = {
    email: email,
    password: password
  };

  request
    .post(`${baseUrl}/user`)
    .send(credentialsObj)
    .then(response => {
      console.log(response);
      const action = userSignup(response.body);
      dispatch(action);
    })
    .catch(error => {
      console.log(error.response.body.message);
      return console.error;
    });
};

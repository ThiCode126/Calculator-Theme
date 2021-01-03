export const DisplayAlert = (text) => {
  let alertDiv = document.getElementById("error");
  alertDiv.innerHTML = text;
  alertDiv.style.opacity = 1;
};

export const ClearAlert = () => {
  let alertDiv = document.getElementById("error");
  alertDiv.innerHTML = "";
  alertDiv.style.opacity = 0;
};

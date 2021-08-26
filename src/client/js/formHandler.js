import { checkForURL_ } from "./urlChecker";
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.querySelector("input").value;
  // checkForName(formText);

  if (Client.checkForURL(formText)) {
    console.log("::: Form Submitted :::");
    postData("http://localhost:8080/analyze", { txt: formText }).then((res) => {
      document.querySelector(".agr").textContent = res.agreement;
      document.querySelector(".sbj").textContent = res.subjectivity;
      document.querySelector(".conf").textContent = res.confidence;
      document.querySelector(".irn").textContent = res.irony;
    });
  } else {
    alert("The url is invalid try again, please!");
  }
}

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

var onBlur = () => {};

export { handleSubmit };

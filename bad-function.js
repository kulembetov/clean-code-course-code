function renderContent(renderInformation) {
  const element = renderInformation.element;
  if (element === "script" || element === "SCRIPT") {
    throw new Error("Invalid element.");
  }

  let partialOpeningTag = "<" + element;

  const attributes = renderInformation.attributes;

  for (const attribute of attributes) {
    partialOpeningTag =
      partialOpeningTag + " " + attribute.name + '="' + attribute.value + '"';
  }

  const openingTag = partialOpeningTag + ">";

  const closingTag = "</" + element + ">";
  const content = renderInformation.content;

  const template = openingTag + content + closingTag;

  const rootElement = renderInformation.root;

  rootElement.innerHTML = template;
}

const createSupportChannel = (email) => {
  if (!emailIsValid(email)) {
    showErrorMessage("Invalid email - could not create channel");
  }
};

const createUser = (email, password) => {
  validateInput(email, password);
  saveUser(email, password);
};

const isValidInput = (email, password) => {
  return emailIsValid(email) && passwordIsValid(password);
};

const emailIsValid = (email) => {
  return email && email.includes("@");
};

const passwordIsValid = (password) => {
  return password && password.trim() !== "";
};

const validateInput = (email, password) => {
  if (!isValidInput(email, password)) {
    throw new Error("Invalid input!");
  }
};

const showErrorMessage = (message) => {
  console.log(message);
};

const saveUser = (email, password) => {
  const user = { email, password };
  database.insert(user);
};


const buildUser = (email, password) => {
  return { email, password };
};

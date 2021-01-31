"use strict";

var profileName = 'ADITI ANMOL';
var profileDescription = 'I\'m highly organized and detail-oriented person. I\'ve been working as a software engineer for about three years now. Most of my experience has been in insurance and healthcare domains, and I also have some cloud experience. I\'m passionate about learning new things, implementing them and creating a personal approach for it. My hobbies include cooking and reading books. A recipe I learnt recently is Neapolitan pizza.';
var gitHubUrl = 'https://github.com/AditiAnmol';
var element = /*#__PURE__*/React.createElement("div", {
  id: "profile",
  className: "main"
}, /*#__PURE__*/React.createElement("div", {
  id: "profile-name",
  className: "name"
}, profileName), /*#__PURE__*/React.createElement("div", {
  id: "profile-image"
}, /*#__PURE__*/React.createElement("img", {
  className: "imag",
  src: "/images/aditi-anmol-profile-pic-none.png",
  title: profileName,
  alt: "Aditi"
})), /*#__PURE__*/React.createElement("div", {
  id: "profile-description",
  className: "desc"
}, profileDescription), /*#__PURE__*/React.createElement("div", {
  id: "profile-github"
}, /*#__PURE__*/React.createElement("a", {
  href: gitHubUrl,
  target: "_blank"
}, /*#__PURE__*/React.createElement("img", {
  className: "g-url",
  src: "/images/github-logo.png",
  title: "Github",
  alt: "Github"
}))));
ReactDOM.render(element, document.getElementById('content'));
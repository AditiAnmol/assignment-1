const profileName = 'ADITI ANMOL';
const profileDescription = 'I\'m highly organized and detail-oriented person. I\'ve been working as a software engineer for about three years now. Most of my experience has been in insurance and healthcare domains, and I also have some cloud experience. I\'m passionate about learning new things, implementing them and creating a personal approach for it. My hobbies include cooking and reading books. A recipe I learnt recently is Neapolitan pizza.';
const gitHubUrl = 'https://github.com/AditiAnmol';

const element = (
    <div id="profile" className="main">
        <div id="profile-name" className="name">
                {profileName}
        </div>
        <div id="profile-image">
            <img className="imag" src="/images/aditi-anmol-profile-pic-none.png" title={profileName} alt="Aditi" />
        </div>
        <div id="profile-description" className="desc">
            {profileDescription}
        </div>
        <div id="profile-github">
            <a href={gitHubUrl} target="_blank">
                <img className="g-url" src="/images/github-logo.png" title="Github" alt="Github"/>
            </a>
        </div>
    </div>
);


ReactDOM.render(element, document.getElementById('content'));
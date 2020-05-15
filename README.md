# Auryn
<p float="left">
  <img src="https://raw.githubusercontent.com/YOU-i-Labs/Auryn/develop/screenshots/Auryn-Handset.png" alt="" width="257">
  <img src="https://raw.githubusercontent.com/YOU-i-Labs/Auryn/develop/screenshots/Auryn-Tablet.png" alt="" width="610">
  <img src="https://raw.githubusercontent.com/YOU-i-Labs/Auryn/develop/screenshots/Auryn-TV.png" alt="" width="872">
</p>

Auryn is a simple React-Native sample application running on You.i Engine one.
It's primary purpose is to show a movie and TV experience using You.i's After
Effects designer workflow integrated with a standard React using
React-Navigation and React-Redux

  - **Technology stack**: Auryn requires the You.i Engine SDK and is built
    using TypeScript with React Native’s JSX syntax and cross-platform C++.
  - **Platforms**: Auryn can be built to run on iOS, Android, tvOS, Android
    TV, Amazon Fire TV, Roku, Tizen, Xbox One, and PlayStation 4. Development
    can be done on macOS, Windows, or Linux.

---
  * [Installation](#installation)
    + [Install You.i Engine SDK](#install-youi-engine-sdk)
    + [3rd party API keys](#3rd-party-api-keys)
  * [Usage](#usage)
  * [Debugging](#debugging)
  * [FAQ](#faq)
  * [Support](#support)
  * [Contributing](#contributing)
  * [License](#license)

## Installation

**Please note that you will need access to the You.i Engine SDK in order to
build and run this application.**

### Install You.i Engine SDK
There are a few dependencies that needs to be pre-installed before building the
app, depending on your platform. Please follow the installation instructions at
[our Developer
Portal](https://developer.youi.tv/latest/Content/InstallationCommon/H1IntroToInstallSection.htm)
before continuing.

### 3rd party API keys
Auryn uses free data from [The Movie Database](https://www.themoviedb.org/)
You will need to provide your own API key for the app to run. API keys can be
requested [here](https://developers.themoviedb.org/3/getting-started/introduction)

Once you aquire the API key, add it to the existing `secrets.ts` file in the root of the Auryn project.

## Usage

To get started, simply clone the repository and install all dependencies:
```shell
git clone https://github.com/YOU-i-Labs/Auryn
cd Auryn
yarn install
```

Building the app is done via the CLI. You can find the full documentations for this on our developer portal but we'll walk through the basics here.

`youi-tv generate` will create the relevant project based on platform (Xcode,
Android Studio, Visual Studio, etc.) in the corrosponding `build` folder.

Additional supported platforms are: `osx, android, ios, tvos, tizen-nacl, uwp,
ps4, linux`

For example, to build for OSX:
```shell
youi-tv generate -p osx [-c Debug|Release]
youi-tv build -p osx [-c Debug|Release]
```
For additional information on the build scripts please refer to [this
page.](https://developer.youi.tv/latest/Content/RN_BuildingAppsTopics/H2RNBuildProc.htm)

Next, open a new terminal window, navigate back to the Auryn root directory and start the Metro bundler server. The Metro bundler will need it's own window to run the server:
```shell
cd <PathToAurynRootDirectory>/
yarn start
```

Finally, in your other terminal window, start the app (the other terminal window should be still in the `Auryn/youi` directory):
```shell
youi-tv run -p osx [-c Debug|Release]
```

## Debugging

You.i Engine apps support remote debugging just like a regular React Native
app. To turn on debugging press or touch any corner of the app 3 times in a
row. The You.i Engine debug menu will open where you can turn on
`Remote JS debugging`

Note: Debugging incurs a performance hit and is not recommended when testing on
low end devices.

## FAQ

### Auryn launches, but won't get past the Splash Screen
Auryn requires an API key from TMDB. Without it, no data will load and the
Splash Screen will not navigate to the main Lander.

### Auryn is running slow on most devices
You.i Engine apps provide a verbose amount of information in debug mode which
is useful for development, but taxing on most devices. You will see significant
performance improvements in Release mode. To build in Release pass the `-c
Release` flag to the build scripts, or choose the proper configuration in your
IDE.

## Support

Auryn is provided as-is. For any questions, please reach out to your account
manager.

## Contributing

Contributing is currently closed. Please refer to
[CONTRIBUTING](CONTRIBUTING.md) for more information.

## License

Auryn is available under the [MIT](LICENSE) license.

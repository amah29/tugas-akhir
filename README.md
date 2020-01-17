### :fire: Quasar Project for Codestack IT Solutions and Training Services From Native to FullStack Web Developer #crashcourse batch 3 :fire:

### Project setup
:one:
```
git clone https://github.com/Masterxhen/musicList-app-batch3.git
or Download Zip and Extract the Package
```


### Installation Via Git (Terminal, Poweshell, Bash, Command Prompt) and Open Into Visual Studio Code
:two:
```
cd musicList-app-batch3
code .
yarn install

```

### Installation By downloading the file
:two:
```
Open Project in Visual Studio Code
yarn install

```

### Firebase Setup 
:three: :computer:
```
Find firebase.js under src/boot/firebase.js
change the var firebaseConfig variable into your firebase console

```

### Project File Configuration

![image](https://user-images.githubusercontent.com/30729644/67186338-7b82af80-f41a-11e9-89bf-1ea61ae7e9ef.png)

### Firebase Console Configuration
![image](https://user-images.githubusercontent.com/30729644/67186651-18454d00-f41b-11e9-8fe6-8fd62dbfd24d.png)


### Compiles and hot-reloads for development for client
:four: :computer:
```
quasar dev

```

### Compiles the project and minifies for production (appears "dist/spa" folder )
:five: :computer:
```
quasar build

```

### Android Setup on quasar.conf.js 
:three: :iphone:
```
open quasar.conf.js file
find the devServer Object
change or uncomment the https: true properties
```
### Before (To open your web development server, set it into this)
![image](https://user-images.githubusercontent.com/30729644/67187407-b4bc1f00-f41c-11e9-9084-04171a84a422.png)
### After
![image](https://user-images.githubusercontent.com/30729644/67187518-f77df700-f41c-11e9-97bd-63a2d2d65578.png)


### Compiles and hot-reloads for development for mobile device [android | ios]
:four: :iphone:
```
quasar mode add cordova
cd src-cordova
cordova platform add android
quasar dev -m cordova -T android
or
quasar dev -m cordova -T ios

```

### Compiles the project and minifies for production (appears "dist/cordova" folder) [android | ios]
:five: :iphone:
```
quasar build -m android
or
quasar build -m ios

```

### Happy Coding :muscle: :computer:

# react-web-template

'./kill3000' Kills port 3000
'npm run clean' Removes dist folder
'npm run purge' Removes dist folder and node-modules
'npm run test' "npm run test-webpack && npm run test-karma",
'./compile' "cd src/js && webpack",
'npm run start' "node --harmony ./express/start.js",
'npm run jenkins' "npm run kill3000 ; npm run purge && npm install -DE && npm run compile && npm run test"

## Git dos

    git add .
    git status
    git commit -am "A message here"
    git pull
    # git don't know what im doing
    git pull --rebase

## Git don'ts

    git merge
    git pull # maybe okay with merge ff-only set in git config


Jenkins should run

    npm run jenkins

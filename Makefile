prep:
	npm install --save-dev electron electron-builder yarn app-builder-lib

run:
	npm start

dist:
	./node_modules/.bin/electron-builder --win --linux

node_path = NODE_PATH=./bin:.:./node_modules:`npm root`
webpack = node ./node_modules/webpack/bin/webpack.js
webpack-dev-server = node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js
electron = ./node_modules/electron-prebuilt/dist/electron
ava = ${node_path} ./node_modules/ava/cli.js bin/**/*.test.{js,jsx}
tsc = ./node_modules/typescript/bin/tsc

.PHONY: default prod dev app test test-watch watch-tsc

default:
	${webpack}

prod:
	rm -rf dist && ${webpack} --env.production

next:
	rm -rf dist && ${webpack} --env.production --env.next

watch-tsc:
	${tsc} -w

test:
	${tsc} && ${ava}

test-watch:
	${ava} --watch

dev:
	${webpack-dev-server} --hot --inline --port 3000 --content-base dist/

WEBPACK_EXEC = node_modules/.bin/webpack
WEBPACK_SERVER_EXEC = node_modules/.bin/webpack-dev-server

test:
	pytest tests

build-all:
	python src/data/main.py
	$(WEBPACK_EXEC) --config src/ui/webpack/webpack.prod.js

build-frontend:
	$(WEBPACK_EXEC) --config src/ui/webpack/webpack.prod.js

build-dev-all:
	python src/data/main.py
	$(WEBPACK_EXEC) --config src/ui/webpack/webpack.dev.js

build-dev-frontend:
	$(WEBPACK_EXEC) --config src/ui/webpack/webpack.dev.js

serve:
	$(WEBPACK_SERVER_EXEC) --config src/ui/webpack/webpack.dev.js

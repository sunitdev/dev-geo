WEBPACK_EXEC = node_modules/.bin/webpack
WEBPACK_SERVER_EXEC = node_modules/.bin/webpack-dev-server

JEST_EXEC = node_modules/.bin/jest

test-data:
	pytest tests

test-frontend:
	$(JEST_EXEC)

build-all:
	python src/data/main.py
	$(WEBPACK_EXEC) --config src/ui/webpack/webpack.prod.js

build-data:
	python src/data/main.py

build-frontend:
	$(WEBPACK_EXEC) --config src/ui/webpack/webpack.prod.js

build-dev-all:
	python src/data/main.py
	$(WEBPACK_EXEC) --config src/ui/webpack/webpack.dev.js

build-dev-frontend:
	$(WEBPACK_EXEC) --config src/ui/webpack/webpack.dev.js

serve:
	$(WEBPACK_SERVER_EXEC) --config src/ui/webpack/webpack.dev.js

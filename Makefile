server:
	@echo "Run in develop mode"
	yarn docs:dev

build:
	@echo "Building HTML"
	yarn docs:build

remark-docs:
	@echo "Running remark against docs"
	@yarn docs:remeark

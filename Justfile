all: check build-debug doc test
clean:
	cargo clean
watch TARGET="all":
	watchexec -cre lalrpop,rs,toml "just {{TARGET}}"

build: build-debug build-release
build-debug:
	cargo build
build-release:
	cargo build --release
check:
	cargo check --all
clippy:
	cargo clippy --all
doc:
	cargo doc --all
test:
	RUST_BACKTRACE=full cargo test --all -- --nocapture

outdated-deps:
	cargo outdated -R
run +ARGS="":
	cargo run -- {{ARGS}}

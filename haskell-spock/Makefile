# Check that given variables are set and all have non-empty values,
# die with an error otherwise.
#
# Params:
#   1. Variable name(s) to test.
#   2. (optional) Error message to print.
check_defined = \
    $(strip $(foreach 1,$1, \
        $(call __check_defined,$1,$(strip $(value 2)))))
__check_defined = \
    $(if $(value $1),, \
      $(error $1$(if $2, ($2)) is not set))

project  := haskell-spock
registry := hasura
packager_ver := 1.0

project_dir := $(shell pwd)
build_dir   := $(project_dir)/$(shell stack --docker path --dist-dir)/build
version     := $(shell grep -oP '^version:\s*\K.*' $(project).cabal)

build-dir: $(project).cabal
	@:$(call check_defined, IMAGE_VERSION IMAGE_REPO STACK_FLAGS)
	stack $(STACK_FLAGS) build $(BUILD_FLAGS)
	mkdir -p build/rootfs
	docker run --rm -v $(build_dir)/$(project)/$(project):/root/$(project) $(registry)/notif-packager:$(packager_ver) /build.sh $(project) | tar -x -C build/rootfs

image: $(project).cabal
	@:$(call check_defined, IMAGE_VERSION IMAGE_REPO STACK_FLAGS)
	make build-dir STACK_FLAGS=$(STACK_FLAGS) IMAGE_REPO=$(IMAGE_REPO) IMAGE_VERSION=$(IMAGE_VERSION)
	docker build -t $(IMAGE_REPO)/$(project):$(IMAGE_VERSION) build/

release-image: $(project).cabal
	@:$(call check_defined, IMAGE_VERSION IMAGE_REPO STACK_FLAGS)
	make build-dir STACK_FLAGS=$(STACK_FLAGS) IMAGE_REPO=$(IMAGE_REPO) IMAGE_VERSION=$(IMAGE_VERSION)
	upx --best build/rootfs/bin/$(project)
	docker build -t $(IMAGE_REPO)/$(project):$(IMAGE_VERSION) build/

push: $(project).cabal
	@:$(call check_defined, IMAGE_VERSION IMAGE_REPO)
	docker push $(IMAGE_REPO)/$(project):$(IMAGE_VERSION)

LATEST_TAG ?= $$(git tag --list | sort -t. -k 1,1n -k 2,2n -k 3,3n | tail -n 1)
NEXT_TAG ?= $$(./scripts/increment_semver.sh -p $(LATEST_TAG))

current:
	@echo $(LATEST_TAG)
bump:
	@echo "Current version      : $(LATEST_TAG) "
	@echo "Suggested new version: $(NEXT_TAG)"

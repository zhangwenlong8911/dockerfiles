# This file is generated by the template.

REGISTRY?=cr.loongnix.cn
ORGANIZATION?=library
REPOSITORY?=buildpack-deps
TAG?=buster-scm

IMAGE=$(REGISTRY)/$(ORGANIZATION)/$(REPOSITORY):$(TAG)

ALIAS=cr.loongnix.cn/library/buildpack-deps:scm cr.loongnix.cn/library/buildpack-deps:stable-scm

default: image

image:
	docker build --no-cache \
		-t $(IMAGE) \
		.

push: alias
	docker push $(IMAGE)
	for i in $(ALIAS);do \
		docker push $$i; \
	done

alias:
	for i in $(ALIAS);do \
		docker tag $(IMAGE) $$i; \
	done

# This file is generated by the template.

REGISTRY?=cr.loongnix.cn
ORGANIZATION?=google_containers
REPOSITORY?=nginx-slim
TAG?=0.14

IMAGE=$(REGISTRY)/$(ORGANIZATION)/$(REPOSITORY):$(TAG)


default: image

image:
	docker build \
		-t $(IMAGE) \
		.

push:
	docker push $(IMAGE)

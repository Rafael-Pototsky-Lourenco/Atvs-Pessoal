pre:
	@helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
	@helm repo update
	@kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.14.9/config/manifests/metallb-native.yaml
	@kubectl wait --namespace metallb-system \
		--for=condition=ready pod \
		--selector=app=metallb \
		--timeout=300s
	@kubectl apply -f metallb-pool.yaml
	@helm upgrade --install --namespace ingress-nginx --create-namespace ingress-nginx ingress-nginx/ingress-nginx

create:
	@kind create cluster --config config-kind.yaml
	@kubectl get nodes
	@kubectl apply -f daemonset.yaml

up: create pre

destroy:
	@kind delete cluster -n mycluster-local
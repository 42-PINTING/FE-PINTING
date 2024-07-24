FE =: ./FE-PINTING
REPO_URL =: git@github.com:42-PINTING/env

pull:
	if [ -d "env" ]; then \
		echo "env 파일이 있어요.\ngit pull을 실행합니다."; \
		cd env && git pull origin main; \
	else \
		echo "env 파일이 없어요.\ngit clone을 실행합니다."; \
		git clone $(REPO_URL); \
	fi
	

install:
	npm install

dev:
	make pull
	docker run -p 3000:3000 --mount type=bind,src=.,dst=/build -w /build --name build -i -t node:22-bookworm-slim bash -c "apt-get update && apt-get install -y libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++ && npm i && npm run dev"

clean:
	docker rm build
	docker rmi node:22-bookworm-slim
	docker system prune -af

.PHONY: pull all install dev build clean fclean
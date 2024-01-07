# Определение базового образа
FROM node:14

# Установка рабочего каталога в контейнере
WORKDIR /usr/src/app

# Копирование файлов package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование исходных файлов проекта
COPY . .

# Открытие порта 3000
EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"]

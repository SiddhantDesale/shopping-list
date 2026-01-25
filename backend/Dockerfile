FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY mvnw pom.xml ./
COPY .mvn .mvn
RUN chmod +x mvnw

RUN ./mvnw dependency:go-offline -B

COPY src ./src

# Build JAR
RUN ./mvnw clean package -DskipTests

# VERY IMPORTANT: use wildcard
CMD ["sh", "-c", "java -jar target/*.jar"]

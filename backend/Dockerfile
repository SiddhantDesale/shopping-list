# Use Java 17 base image
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw pom.xml ./
COPY .mvn .mvn

# Download dependencies
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

# Copy all source files
COPY src ./src

# Build the project
RUN ./mvnw package -DskipTests

# Expose port
EXPOSE 8080

# Start the app
CMD ["java", "-jar", "target/shoppinglist-0.0.1-SNAPSHOT.jar"]

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /build

COPY . .
RUN dotnet restore "skills-api.csproj"
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS final
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "skills-api.dll"]

# Build Image
# docker build --rm -f "Dockerfile" -t skills-api .

# Run Image
# docker run -it --rm -p 5051:80 skills-api

# Browse using: 
# http://localhost:5051/api/skills

# Publish Image to dockerhub
# docker tag skills-api arambazamba/skills-api
# docker push arambazamba/skills-api
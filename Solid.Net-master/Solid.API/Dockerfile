#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Solid.API/Solid.API.csproj", "Solid.API/"]
COPY ["Solid.Core/Solid.Core.csproj", "Solid.Core/"]
COPY ["Solid.Data/Solid.Data.csproj", "Solid.Data/"]
COPY ["Solid.Service/Solid.Service.csproj", "Solid.Service/"]
RUN dotnet restore "Solid.API/Solid.API.csproj"
COPY . .
WORKDIR "/src/Solid.API"
RUN dotnet build "Solid.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Solid.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Solid.API.dll"]
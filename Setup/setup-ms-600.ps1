# Install Chcolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; 
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; 
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Install Software
choco install microsoft-edge -y
choco install googlechrome -y
choco install vscode -y
choco install dotnetcore-sdk -y
choco install dotnet-6.0-sdk -y
choco install git -y
choco install gitextensions -y
choco install gh -y
choco install nodejs-lts --version=14.18.0 -y
choco install azure-cli -y
choco install azure-functions-core-tools@3 --params="'/x64:true'" -y
choco install azurepowershell -y
choco install postman -y
choco install ngrok -y
choco install curl -y

# Refresh Path Env for npm 
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Add the default nuget package source
dotnet nuget add source https://api.nuget.org/v3/index.json -n nuget.org

# Intall VS Code Extensions
code --install-extension ms-dotnettools.csharp
code --install-extension ms-vscode.powershell
code --install-extension ms-vscode.azurecli
code --install-extension ms-vscode.azure-account
code --install-extension ms-azuretools.vscode-azureappservice
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-azuretools.vscode-azurefunctions
code --install-extension GitHub.vscode-pull-request-github
code --install-extension redhat.vscode-yaml
code --install-extension mdickin.markdown-shortcuts
code --install-extension mhutchie.git-graph 
code --install-extension xabikos.JavaScriptSnippets			
code --install-extension eliostruyf.spfx-snippets
code --install-extension madewithcards/adaptivecardsstudio
code --install-extension humao.rest-client
code --install-extension eliostruyf.vscode-msgraph-autocomplete
code --install-extension vs-publisher-1448185.keyoti-changeallendoflinesequence

# Base Toolset M365 Related
npm i -g webpack webpack-cli
npm i -g gulp yo @microsoft/generator-sharepoint
npm i -g @pnp/cli-microsoft365
npm i -g generator-teams
npm i -g -g yo generator-office

# SPA Frameworks
npm i -g create-react-app

# Finished Msg
Write-Host "Finished Software installation" -ForegroundColor yellow

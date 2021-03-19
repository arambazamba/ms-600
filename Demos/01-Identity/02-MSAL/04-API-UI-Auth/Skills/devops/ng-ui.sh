grp=Hosting
loc=westeurope
acct=skillsapp
path='./ng-ui/dist/skills-app'
var=acctKey
org='https://dev.azure.com/integrationstraining'
proj='skills-app'

az group create -n $grp -l $loc

az storage account create -l $loc -n $acct -g $grp --sku Standard_LRS

key=$(az storage account keys list -n $acct --query "[0].[value][0]")

ep=$(az storage account show -g $grp -n $acct --query "primaryEndpoints.web")

az storage blob service-properties update --account-name $acct --static-website --404-document error.html --index-document index.html

# echo "Primary Endpoint for Static Web: " $ep

# echo "Website Key: " $key

az pipelines variable update --pipeline-name skills-ui --name $var --value $key --organization $org --project $proj


resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}




resource "azurerm_container_registry" "acr" {
  name                = "arsalanaiacr12345"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  sku           = "Basic"
  admin_enabled = true
}

resource "azurerm_service_plan" "appserviceplan" {
  name                = "asp-ai-webapp"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  os_type  = "Linux"
  sku_name = "B1"
}

resource "azurerm_log_analytics_workspace" "law" {
  name                = "law-ai-webapp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "PerGB2018"
  retention_in_days   = 30

}

resource "azurerm_application_insights" "appi" {
  name                = "appi-ai-webapp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  workspace_id        = azurerm_log_analytics_workspace.law.id
  application_type    = "web"
}

resource "azurerm_linux_web_app" "webapp" {

  name                = "arsalan-ai-webapp-2608"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.appserviceplan.id

  https_only = true

  site_config {
    always_on = false

    application_stack {
      docker_image_name        = "ai-webapp:v1"
      docker_registry_url      = "https://${azurerm_container_registry.acr.login_server}"
    }
  }

  app_settings = {
    WEBSITES_PORT = "80"
  }
}
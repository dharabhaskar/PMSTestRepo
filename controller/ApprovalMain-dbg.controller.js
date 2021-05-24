sap.ui.define([
    "com/infocus/GraphitePms/controller/BaseController",
    'sap/ui/model/json/JSONModel',
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
], 

function (Controller,JSONModel,Filter,FilterOperator){
    "use strict";

    return Controller.extend("com.infocus.GraphitePms.controller.ApprovalMain", {
        onInit: function () {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(
                {
                    "ProductCollection": [
                        {
                            "ProductId": "HT-1000",
                            "Category": "Laptops",
                            "MainCategory": "Computer Systems",
                            "TaxTarifCode": "1",
                            "SupplierName": "Very Best Screens",
                            "WeightMeasure": 4.2,
                            "WeightUnit": "KG",
                            "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                            "Name": "Notebook Basic 15",
                            "DateOfSale": "2017-03-26",
                            "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
                            "Status": "Available",
                            "Quantity": 10,
                            "UoM": "PC",
                            "CurrencyCode": "EUR",
                            "Price": 956,
                            "Width": 30,
                            "Depth": 18,
                            "Height": 3,
                            "DimUnit": "cm"
                        },
                        {
                            "ProductId": "HT-1001",
                            "Category": "Laptops",
                            "MainCategory": "Computer Systems",
                            "TaxTarifCode": "1",
                            "SupplierName": "Very Best Screens",
                            "WeightMeasure": 4.5,
                            "WeightUnit": "KG",
                            "Description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                            "Name": "Notebook Basic 17",
                            "DateOfSale": "2017-04-17",
                            "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
                            "Status": "Available",
                            "Quantity": 20,
                            "UoM": "PC",
                            "CurrencyCode": "EUR",
                            "Price": 1249,
                            "Width": 29,
                            "Depth": 17,
                            "Height": 3.1,
                            "DimUnit": "cm"
                        }
                    ]
                }
            );
			this.getView().setModel(oModel);
		},
        onSearch: function (oEvent) {
			// add filter for search
			var aFilters = [];
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("Name", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var oList = this.byId("idList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "Application");
		},

		onSelectionChange: function (oEvent) {
			var oList = oEvent.getSource();
			var oLabel = this.byId("idFilterLabel");
			var oInfoToolbar = this.byId("idInfoToolbar");

			// With the 'getSelectedContexts' function you can access the context paths
			// of all list items that have been selected, regardless of any current
			// filter on the aggregation binding.
			var aContexts = oList.getSelectedContexts(true);

			// update UI
			var bSelected = (aContexts && aContexts.length > 0);
			var sText = (bSelected) ? aContexts.length + " selected" : null;
			oInfoToolbar.setVisible(bSelected);
			oLabel.setText(sText);
		}
    });
});

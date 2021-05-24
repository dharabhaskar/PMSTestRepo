
sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/base/Log"
], function (MessageToast, Controller, Device, Log) {
	"use strict";

	return Controller.extend("com.infocus.GraphitePms.controller.MainView", {

		onInit: function () {
			
			Device.orientation.attachHandler(this.onOrientationChange, this);
		},

		onExit: function () {
			Device.orientation.detachHandler(this.onOrientationChange, this);
		},

		onOrientationChange: function (mParams) {
			var sMsg = "Orientation now is: " + (mParams.landscape ? "Landscape" : "Portrait");
			MessageToast.show(sMsg, { duration: 5000 });
		},

		onListItemPress: function (oEvent) {
			var oItem = oEvent.getParameter("item");

			// var sToPageId=oItem.getKey();
			
			//this.getSplitAppObj().toDetail(this.createId(sToPageId));
			this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
		},


		getSplitAppObj: function () {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		}

	});
});
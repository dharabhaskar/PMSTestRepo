sap.ui.define(
  [
    "com/infocus/GraphitePms/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
  ],
  function (Controller, JSONModel, Fragment, MessageToast) {
    "use strict";

    return Controller.extend(
      "com.infocus.GraphitePms.controller.EmployeeSelfAppraisal",
      {
        onInit: function () {
          var oModel = new JSONModel({
            Employee: {
              
              img: "https://sapui5.hana.ondemand.com/test-resources/sap/m/images/Woman_04.png",
            },
          });
          this.getView().setModel(oModel);
        },
        handleIAgreePopoverPress: function (oEvent) {
          console.log(oEvent);
          var oButton = oEvent.getSource(),
            oView = this.getView();

          console.log(oView);

          // create popover
          if (!this._pPopover) {
            this._pPopover = Fragment.load({
              id: oView.getId(),
              name: "com.infocus.GraphitePms.view.AgreePopover",
              controller: this,
            }).then(function (oPopover) {
              oView.addDependent(oPopover);
              //oPopover.bindElement("/ProductCollection/0");
              return oPopover;
            });
          }
          this._pPopover.then(function (oPopover) {
            oPopover.openBy(oButton);
          });
        },
        handleSaveAppraisalPress: function () {
          this.byId("myPopover").close();
          MessageToast.show("Your appraisal saved successfully.");
        },
        handleCancelAppraisalPress: function () {
          this.byId("myPopover").close();
        },
        handleSaveAsDraft: function(){
          MessageToast.show("Your data saved as draft successfully.")
        }
      }
    );
  }
);
